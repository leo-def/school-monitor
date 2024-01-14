import { Injectable } from '@nestjs/common';
import { SchoolClass } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolClassPaginationParamsDto } from './_types/school-class-pagination-params.dto';
import { UpdateSchoolClassRequestDto } from './_types/update-school-class-request.dto';
import { CreateSchoolClassRequestDto } from './_types/create-school-class-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolClassService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolClassPaginationParamsDto,
  ): Promise<PaginationResponse<SchoolClass, SchoolClassPaginationParamsDto>> {
    return await Pagination.fetch(this.prisma, 'schoolClass', params);
  }

  async find(id: string): Promise<SchoolClass> {
    return await this.prisma.schoolClass.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolClassRequestDto): Promise<SchoolClass> {
    const { companyId, branchId, ...others } = data;
    return await this.prisma.schoolClass.create({
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
    data: UpdateSchoolClassRequestDto,
  ): Promise<SchoolClass> {
    const { branchId, ...others } = data;
    return await this.prisma.schoolClass.update({
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

  async delete(id: string): Promise<SchoolClass> {
    return await this.prisma.schoolClass.delete({ where: { id } });
  }
}
