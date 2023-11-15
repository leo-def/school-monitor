import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  Account,
  AccountToken,
  AccountTokenType,
  NotificationType,
} from '@prisma/client';
import { AccountService } from 'src/account/_services/account/account.service';
import { ChangePasswordDto } from 'src/auth/_dtos/change-password/change-password.dto';
import { ForgotPasswordDto } from 'src/auth/_dtos/forgot-password/forgot-password.dto';
import { ResetPasswordDto } from 'src/auth/_dtos/reset-password/reset-password.dto';
import { SignInDto } from 'src/auth/_dtos/sign-in/sign-in.dto';
import { SignUpDto } from 'src/auth/_dtos/sign-up/sign-up.dto';
import { HashService } from '../hash/hash.service';
import { NotificationService } from 'src/notification/notification.service';
import { CardService } from 'src/card/card.service';
import { JwtService } from '@nestjs/jwt';
import { UserInfo } from 'src/auth/_types/user-info';
import { GroupInfo } from 'src/auth/_types/group-info';
import { ForgotPasswordParamTypeEnum } from 'src/auth/_enums/forgot-password-param-type.enum';
import { ConfirmAccountDto } from 'src/auth/_dtos/confirm-account/confirm-account.dto';
import { AccountTokenService } from 'src/account/_services/account-token/account-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly accountTokenService: AccountTokenService,
    private readonly accountService: AccountService,
    private readonly cardService: CardService,
    private readonly hashService: HashService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDto): Promise<Account> {
    if (dto.auth.password !== dto.auth.confirmPassword) {
      throw new HttpException('Passwords do not match', HttpStatus.FORBIDDEN);
    }
    const duplicate = await this.accountService.findDuplicate({
      phone: dto.profile.phone,
      email: dto.profile.email,
      username: dto.auth.username,
    });
    if (duplicate) {
      throw new HttpException('Duplicate account', HttpStatus.CONFLICT);
    }
    const password = await this.hashService.generateHash(dto.auth.password);
    const account: Partial<Account> = {
      isGroup: dto.accountType.isGroup === 'true',
      name: dto.profile.name,
      phone: dto.profile.phone,
      email: dto.profile.email,
      username: dto.auth.username,
      password,
      referenceToken: dto.reference.token,
      referenceId: dto.reference.id,
    };
    const customerAccount = await this.accountService.createCustomer(account);
    const token = await this.accountTokenService.createActiveToken(
      customerAccount.id,
      AccountTokenType.CONFIRM_ACCOUNT,
    );

    await this.cardService.createAccountMainFolder(customerAccount.id);
    await this.notificationService.notify(
      customerAccount.id,
      NotificationType.CONFIRM_ACCOUNT,
      token,
    );
    return customerAccount;
  }

  async signIn(dto: SignInDto): Promise<string> {
    const { username, password } = dto;
    const account = await this.accountService.findAccountGroupsByUsername(
      username,
    );
    if (!account?.active) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
    const isMatch = await this.hashService.compare(password, account.password);
    if (!isMatch) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
    const payload = {
      id: account.id,
      name: account.name,
      username: account.username,
      role: account.role,
      isGroup: account.isGroup,
      groups: account.groups
        .filter((groupAccount) => !!groupAccount)
        .map(
          (groupAccount) =>
            ({
              role: groupAccount.role,
              id: groupAccount.group?.id,
              name: groupAccount.group?.name,
              username: groupAccount.group?.username,
            } as GroupInfo),
        ),
    } as UserInfo;
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async changePassword(
    accountId: string,
    dto: ChangePasswordDto,
  ): Promise<Account> {
    const { oldPassword, password, confirmPassword } = dto;
    if (password !== confirmPassword) {
      throw new HttpException('Passwords do not match', HttpStatus.FORBIDDEN);
    }
    const account = await this.accountService.findById(accountId);
    if (!account) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
    const isMatch = await this.hashService.compare(
      oldPassword,
      account.password,
    );
    if (!isMatch) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
    const hashPassword = await this.hashService.generateHash(password);
    await this.notificationService.notify(
      accountId,
      NotificationType.PASSWORD_CHANGED,
    );
    return await this.accountService.update(accountId, {
      password: hashPassword,
    });
  }

  async requestResetPassword(dto: ForgotPasswordDto): Promise<AccountToken> {
    const { email, phone, paramType } = dto;
    if (
      !paramType ||
      (paramType === ForgotPasswordParamTypeEnum.EMAIL && !email) ||
      (paramType === ForgotPasswordParamTypeEnum.PHONE && !phone)
    ) {
      throw new HttpException('Invalid Request', HttpStatus.BAD_REQUEST);
    }

    const account = await this.accountService.findBy({
      ...(ForgotPasswordParamTypeEnum.EMAIL ? { email } : { phone }),
    });
    if (!account) {
      throw new HttpException(
        'Account not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const oldToken =
      await this.accountTokenService.findActiveByAccountIdAndType(
        account.id,
        AccountTokenType.RESET_PASSWORD,
      );
    if (oldToken) {
      await this.accountTokenService.inactiveById(oldToken.id);
    }
    const token = await this.accountTokenService.createActiveToken(
      account.id,
      AccountTokenType.RESET_PASSWORD,
    );
    await this.notificationService.notify(
      account.id,
      NotificationType.RESET_PASSWORD,
      token,
    );
    return token;
  }

  async resetPassword(dto: ResetPasswordDto): Promise<Account> {
    const { token, password, confirmPassword } = dto;
    if (password !== confirmPassword) {
      throw new HttpException('Passwords do not match', HttpStatus.FORBIDDEN);
    }
    const tokenEntity = await this.accountTokenService.findActiveByTokenAndType(
      token,
      AccountTokenType.RESET_PASSWORD,
    );
    if (!tokenEntity) {
      throw new HttpException(
        'Token not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const tokenId = tokenEntity.id;
    const accountId = tokenEntity.accountId;
    const hashPassword = await this.hashService.generateHash(password);
    const account = await this.accountService.updatePassword(
      accountId,
      hashPassword,
    );
    if (!account) {
      throw new HttpException(
        'Account not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    await this.accountTokenService.inactiveById(tokenId);
    await this.notificationService.notify(
      accountId,
      NotificationType.PASSWORD_RESET,
      tokenEntity,
    );
    return account;
  }

  async confirmAccount(dto: ConfirmAccountDto): Promise<Account> {
    const { token } = dto;
    if (!token) {
      throw new Error('Invalid Request');
    }
    const tokenEntity = await this.accountTokenService.findActiveByTokenAndType(
      token,
      AccountTokenType.CONFIRM_ACCOUNT,
    );
    if (!tokenEntity) {
      throw new HttpException(
        'Token not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const tokenId = tokenEntity.id;
    const accountId = tokenEntity.accountId;
    const account = await this.accountService.activeAccount(accountId);
    if (!account) {
      throw new HttpException(
        'Account not found',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    await this.accountTokenService.inactiveById(tokenId);
    await this.notificationService.notify(
      accountId,
      NotificationType.ACCOUNT_CONFIRMED,
      tokenEntity,
    );
    return account;
  }
}
