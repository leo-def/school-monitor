import { Injectable } from '@nestjs/common';
import { Branch } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { BranchPaginationParamsDto } from './_types/branch-pagination-params.dto';
import { UpdateBranchRequestDto } from './_types/update-branch-request.dto';
import { CreateBranchRequestDto } from './_types/create-branch-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class BranchService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: BranchPaginationParamsDto,
  ): Promise<PaginationResponse<Branch, BranchPaginationParamsDto>> {
    return Pagination.fetch(this.prisma, 'branch', params);
  }

  async find(id: string): Promise<Branch> {
    return await this.prisma.branch.findFirst({ where: { id } });
  }

  async create(data: CreateBranchRequestDto): Promise<Branch> {
    return await this.prisma.branch.create({ data: data as any });
  }

  async update(id: string, data: UpdateBranchRequestDto): Promise<Branch> {
    return await this.prisma.branch.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Branch> {
    return await this.prisma.branch.delete({ where: { id } });
  }
}
