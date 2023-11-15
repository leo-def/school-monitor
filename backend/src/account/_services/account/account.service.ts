import { Injectable } from '@nestjs/common';
import { Account, SystemRole } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountParams } from '../../_types/account-params';
import { AccountGroup } from '../../_types/account-group';
import { UniqueAccountFilter } from '../../_types/unique-account-filter';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(params: AccountParams): Promise<Array<Account>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.account.findMany(query);
  }

  async findDuplicate(params: UniqueAccountFilter): Promise<Account> {
    return await this.prisma.account.findFirst({
      where: {
        OR: Object.keys(params)
          .filter((key) => !!params[key])
          .map(
            (key) => ({ [key]: params[key] } as Partial<UniqueAccountFilter>),
          ),
      },
    });
  }

  async createCustomer(data: Partial<Account>): Promise<Account> {
    return await this.prisma.account.create({
      data: {
        name: data.name,
        username: data.username,
        password: data.password,
        phone: data.phone,
        email: data.email,
        isGroup: data.isGroup,
        role: SystemRole.CUSTOMER,
        active: false,
      },
    });
  }

  async create(data: Partial<Account>): Promise<Account> {
    return await this.prisma.account.create({ data: data as any });
  }

  async update(id: string, data: Partial<Account>): Promise<Account> {
    return await this.prisma.account.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Account> {
    return await this.prisma.account.delete({ where: { id } });
  }

  async findAccountGroupsByUsername(username: string): Promise<AccountGroup> {
    return await this.prisma.account.findFirst({
      where: { username },
      include: { groups: { include: { group: true } } },
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

  async updatePassword(id: string, password: string): Promise<Account> {
    return await this.prisma.account.update({
      where: { id },
      data: { password },
    });
  }
}
