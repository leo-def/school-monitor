import { Injectable } from '@nestjs/common';
import { Branch } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { BranchPaginationParamsDto } from './_types/branch-pagination-params.dto';

@Injectable()
export class BranchService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(params: BranchPaginationParamsDto): Promise<Array<Branch>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.branch.findMany(query);
  }

  async find(id: string): Promise<Branch> {
    return await this.prisma.branch.findFirst({ where: { id } });
  }

  async create(data: Partial<Branch>): Promise<Branch> {
    return await this.prisma.branch.create({ data: data as any });
  }

  async update(id: string, data: Partial<Branch>): Promise<Branch> {
    return await this.prisma.branch.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Branch> {
    return await this.prisma.branch.delete({ where: { id } });
  }
}
