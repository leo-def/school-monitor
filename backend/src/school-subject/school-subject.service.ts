import { Injectable } from '@nestjs/common';
import { SchoolSubject } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSubjectPaginationParamsDto } from './_types/school-subject-pagination-params.dto';
import { CreateSchoolSubjectRequestDto } from './_types/create-school-subject-request.dto';
import { UpdateSchoolSubjectRequestDto } from './_types/update-school-subject-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolSubjectService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolSubjectPaginationParamsDto,
  ): Promise<
    PaginationResponse<SchoolSubject, SchoolSubjectPaginationParamsDto>
  > {
    return await Pagination.fetch(this.prisma, 'schoolSubject', params);
  }

  async find(id: string): Promise<SchoolSubject> {
    return await this.prisma.schoolSubject.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolSubjectRequestDto): Promise<SchoolSubject> {
    const { companyId, branchId, ...others } = data;
    return await this.prisma.schoolSubject.create({
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
    data: UpdateSchoolSubjectRequestDto,
  ): Promise<SchoolSubject> {
    const { branchId, ...others } = data;
    return await this.prisma.schoolSubject.update({
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

  async delete(id: string): Promise<SchoolSubject> {
    return await this.prisma.schoolSubject.delete({ where: { id } });
  }
}
