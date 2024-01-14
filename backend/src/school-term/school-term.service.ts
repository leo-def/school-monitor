import { Injectable } from '@nestjs/common';
import { SchoolTerm } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolTermPaginationParamsDto } from './_types/school-term-pagination-params.dto';
import { UpdateSchoolTermRequestDto } from './_types/update-school-term-request.dto';
import { CreateSchoolTermRequestDto } from './_types/create-school-term-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolTermService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolTermPaginationParamsDto,
  ): Promise<PaginationResponse<SchoolTerm, SchoolTermPaginationParamsDto>> {
    return await Pagination.fetch(this.prisma, 'schoolTerm', params);
  }

  async find(id: string): Promise<SchoolTerm> {
    return await this.prisma.schoolTerm.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolTermRequestDto): Promise<SchoolTerm> {
    const { companyId, branchId, ...others } = data;
    return await this.prisma.schoolTerm.create({
      data: {
        ...others,
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
    data: UpdateSchoolTermRequestDto,
  ): Promise<SchoolTerm> {
    const { branchId, ...others } = data;
    return await this.prisma.schoolTerm.update({
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

  async delete(id: string): Promise<SchoolTerm> {
    return await this.prisma.schoolTerm.delete({ where: { id } });
  }
}
