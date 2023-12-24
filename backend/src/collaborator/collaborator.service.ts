import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Collaborator } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { CollaboratorPaginationParamsDto } from './_types/collaborator-pagination-params.dto';
import { UpdateCollaboratorRequestDto } from './_types/update-collaborator-request.dto';
import { CreateCollaboratorRequestDto } from './_types/create-collaborator-request.dto';
import { AccountService } from 'src/account/_services/account/account.service';

@Injectable()
export class CollaboratorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly accountService: AccountService,
  ) {}

  async fetch(
    params: CollaboratorPaginationParamsDto,
  ): Promise<Array<Collaborator>> {
    const query = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.collaborator.findMany(query);
  }

  async find(id: string): Promise<Collaborator> {
    return await this.prisma.collaborator.findFirst({
      where: { id },
    });
  }

  async create(data: CreateCollaboratorRequestDto): Promise<Collaborator> {
    const { accountId, account, companyId, branchId, ...others } = data;
    if (!accountId && !account) {
      throw new HttpException('Invalid Account', HttpStatus.BAD_REQUEST);
    }
    const newAccount = await this.accountService.getCustomerAccountData(
      data.account,
    );

    return await this.prisma.collaborator.create({
      data: {
        ...others,
        account: {
          ...(accountId
            ? { connect: { id: accountId } }
            : { create: newAccount }),
        },
        company: {
          connect: { id: companyId },
        },
        ...(branchId
          ? {
              branch: {
                connect: { id: branchId },
              },
            }
          : {}),
      } as any,
    });
  }

  async update(
    id: string,
    data: UpdateCollaboratorRequestDto,
  ): Promise<Collaborator> {
    const { branchId, ...others } = data;
    return await this.prisma.collaborator.update({
      where: { id },
      data: {
        ...others,
        ...(branchId
          ? {
              branch: {
                connect: { id: branchId },
              },
            }
          : {}),
      } as any,
    });
  }

  async delete(id: string): Promise<Collaborator> {
    return await this.prisma.collaborator.delete({ where: { id } });
  }
}
