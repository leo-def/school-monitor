import { Injectable } from '@nestjs/common';
import { AccountToken, AccountTokenType, ActiveStatus } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async findActiveByTokenAndType(
    token: string,
    type?: AccountTokenType,
  ): Promise<AccountToken> {
    return await this.prisma.accountToken.findFirst({
      where: {
        token,
        type,
        status: ActiveStatus.ACTIVE,
      },
    });
  }
  async findActiveByAccountIdAndType(
    accountId: string,
    type?: AccountTokenType,
  ): Promise<AccountToken> {
    return await this.prisma.accountToken.findFirst({
      where: {
        accountId,
        type,
        status: ActiveStatus.ACTIVE,
      },
    });
  }

  async inactiveById(id: string): Promise<AccountToken> {
    return await this.prisma.accountToken.update({
      where: { id },
      data: { status: ActiveStatus.INACTIVE },
    });
  }

  async createActiveToken(
    accountId: string,
    type: AccountTokenType,
    token?: string,
  ) {
    return await this.prisma.accountToken.create({
      data: {
        accountId,
        token: token ?? uuidv4(),
        type,
        status: ActiveStatus.ACTIVE,
      },
    });
  }
}
