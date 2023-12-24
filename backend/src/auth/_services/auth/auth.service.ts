import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  Account,
  AccountToken,
  AccountTokenType,
  NotificationType,
} from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/account/_services/account/account.service';
import { ChangePasswordRequestDto } from 'src/auth/_dtos/change-password/change-password-request.dto';
import { ForgotPasswordRequestDto } from 'src/auth/_dtos/forgot-password/forgot-password-request.dto';
import { ResetPasswordRequestDto } from 'src/auth/_dtos/reset-password/reset-password-request.dto';
import { SignInRequestDto } from 'src/auth/_dtos/sign-in/sign-in-request.dto';
import { SignUpRequestDto } from 'src/auth/_dtos/sign-up/sign-up-request.dto';
import { NotificationService } from 'src/notification/notification.service';
import { UserInfo } from 'src/auth/_types/user-info';
import { ForgotPasswordParamTypeEnum } from 'src/auth/_enums/forgot-password-param-type.enum';
import { ConfirmAccountRequestDto } from 'src/auth/_dtos/confirm-account/confirm-account-request.dto';
import { AccountTokenService } from 'src/account/_services/account-token/account-token.service';
import { CreateCustomerAccountRequestDto } from 'src/account/_types/create-customer-account-request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly accountTokenService: AccountTokenService,
    private readonly accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpRequestDto): Promise<Account> {
    const account: CreateCustomerAccountRequestDto = {
      imgId: dto.profile.imgId,
      name: dto.profile.name,
      phone: dto.profile.phone,
      email: dto.profile.email,
      username: dto.auth.username,
      password: dto.auth.password,
      confirmPassword: dto.auth.confirmPassword,
      referenceToken: dto.reference.token,
      referenceId: dto.reference.id,
    };
    const customerAccount = await this.accountService.createCustomer(account);
    const token = await this.accountTokenService.createActiveToken(
      customerAccount.id,
      AccountTokenType.CONFIRM_ACCOUNT,
    );
    await this.notificationService.notify(
      customerAccount.id,
      NotificationType.CONFIRM_ACCOUNT,
      token,
    );
    return customerAccount;
  }

  async signIn(dto: SignInRequestDto): Promise<string> {
    const { username, password } = dto;
    const account =
      await this.accountService.findAccountCollaboratorByUsername(username);
    if (!account?.active) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
    await this.accountService.checkPassword(password, account.password);
    const payload = {
      id: account.id,
      name: account.name,
      username: account.username,
      role: account.role,
      collaboratorsList: account.collaboratorsList.map((collaborator) => ({
        id: collaborator.id,
        branch: collaborator.branch
          ? {
              id: collaborator.branch.id,
              title: collaborator.branch.title,
            }
          : undefined,
        company: collaborator.company
          ? {
              id: collaborator.company.id,
              title: collaborator.company.title,
              branchs: collaborator.company.branchs.map((branch) => ({
                id: branch.id,
                title: branch.title,
              })),
            }
          : undefined,
        role: collaborator.role,
      })),
    } as UserInfo;
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  async changePassword(
    accountId: string,
    dto: ChangePasswordRequestDto,
  ): Promise<Account> {
    const { oldPassword, password, confirmPassword } = dto;
    const account = await this.accountService.findById(accountId);
    if (!account) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
    await this.accountService.checkPassword(oldPassword, account.password);
    await this.notificationService.notify(
      accountId,
      NotificationType.PASSWORD_CHANGED,
    );
    return await this.accountService.updatePassword(accountId, {
      password,
      confirmPassword,
    });
  }

  async requestResetPassword(
    dto: ForgotPasswordRequestDto,
  ): Promise<AccountToken> {
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

  async resetPassword(dto: ResetPasswordRequestDto): Promise<Account> {
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
    const account = await this.accountService.updatePassword(accountId, {
      password,
      confirmPassword,
    });
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

  async confirmAccount(dto: ConfirmAccountRequestDto): Promise<Account> {
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
