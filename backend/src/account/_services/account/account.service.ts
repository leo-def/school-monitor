import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Account, Source, SystemRole } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CheckDuplicateAccountRequestDto } from '../../_types/check-duplicate-account-request.dto';
import { AccountPaginationParamsDto } from 'src/account/_types/account-pagination-params.dto';
import { UpdateAccountRequestDto } from 'src/account/_types/update-account-request.dto';
import { UpdatePasswordRequestDto } from 'src/account/_types/update-password-request.dto';
import { UpdateUsernameRequestDto } from 'src/account/_types/update-username-request.dto';
import { HashService } from 'src/hash/_services/hash.service';
import { CreateCustomerAccountRequestDto } from 'src/account/_types/create-customer-account-request.dto';
import { AccountCollaborator } from 'src/account/_types/account-collaborator';
import { CreateAccountRequestDto } from 'src/account/_types/create-account-request.dto';

@Injectable()
export class AccountService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashService: HashService,
  ) {}

  async fetch(params: AccountPaginationParamsDto): Promise<Array<Account>> {
    const query = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.account.findMany(query);
  }

  async checkDuplicateAccount(
    params: CheckDuplicateAccountRequestDto,
  ): Promise<void> {
    const query = {
      where: {
        OR: Object.keys(params)
          .filter((key) => !!params[key])
          .map(
            (key) =>
              ({
                [key]: params[key],
              }) as Partial<CheckDuplicateAccountRequestDto>,
          ),
      },
    };
    const duplicate = await this.prisma.account.findFirst(query);
    if (duplicate) {
      throw new HttpException('Conflict account', HttpStatus.CONFLICT);
    }
  }

  async getAccountData(data: Partial<Account> & { confirmPassword?: string }) {
    const { password, confirmPassword, ...others } = data;

    await this.checkDuplicateAccount({
      username: data.username,
      phone: data.phone,
      email: data.email,
    });

    const hashPassword = password
      ? await this.getHashPassword(password, confirmPassword)
      : undefined;
    return {
      ...others,
      password: hashPassword,
    };
  }

  async getCustomerAccountData(
    data: Partial<Account> & { confirmPassword: string },
  ) {
    return this.getAccountData({
      ...data,
      role: SystemRole.CUSTOMER,
      active: false,
      source: Source.USER,
    });
  }

  async createCustomer(
    data: CreateCustomerAccountRequestDto,
  ): Promise<Account> {
    const newData = await this.getCustomerAccountData(data);
    return await this.prisma.account.create({
      data: newData as any,
    });
  }

  async create(data: CreateAccountRequestDto): Promise<Account> {
    const newData = await this.getAccountData(data);
    return await this.prisma.account.create({
      data: newData as any,
    });
  }

  async update(id: string, data: UpdateAccountRequestDto): Promise<Account> {
    const newData = await this.getAccountData(data);
    return await this.prisma.account.update({
      where: { id },
      data: newData as any,
    });
  }

  async updateUsername(
    id: string,
    data: UpdateUsernameRequestDto,
  ): Promise<Account> {
    await this.checkDuplicateAccount({
      username: data.username,
    });
    return await this.prisma.account.update({ where: { id }, data });
  }

  async updatePassword(
    id: string,
    data: UpdatePasswordRequestDto,
  ): Promise<Account> {
    const { password, confirmPassword } = data;
    const hashPassword = await this.getHashPassword(password, confirmPassword);
    return await this.prisma.account.update({
      where: { id },
      data: { password: hashPassword },
    });
  }

  async delete(id: string): Promise<Account> {
    return await this.prisma.account.delete({ where: { id } });
  }

  async findAccountCollaboratorByUsername(
    username: string,
  ): Promise<AccountCollaborator> {
    return await this.prisma.account.findFirst({
      where: { username },
      include: {
        collaboratorsList: {
          include: {
            branch: true,
            company: { include: { branchs: true } },
          },
        },
      },
    });
  }

  async findById(id: string): Promise<Account> {
    return await this.prisma.account.findFirst({ where: { id } });
  }

  async findBy(where: Partial<Account>): Promise<Account> {
    return await this.prisma.account.findFirst({ where });
  }

  async activeAccount(id: string): Promise<Account> {
    return await this.prisma.account.update({
      where: { id },
      data: { active: true },
    });
  }

  async checkPassword(
    password: string,
    accountPassword: string,
  ): Promise<void> {
    const isMatch = await this.hashService.compare(password, accountPassword);
    if (!isMatch) {
      throw new HttpException('Invalid Credentials', HttpStatus.FORBIDDEN);
    }
  }

  async getHashPassword(password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      throw new HttpException('Passwords do not match', HttpStatus.FORBIDDEN);
    }
    return await this.hashService.generateHash(password);
  }
}
