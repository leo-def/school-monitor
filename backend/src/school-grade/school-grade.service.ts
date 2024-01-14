import { Injectable } from '@nestjs/common';
import { SchoolGrade } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSchoolGradeRequestDto } from './_types/create-school-grade-request.dto';
import { SchoolGradePaginationParamsDto } from './_types/school-grade-pagination-params.dto';
import { UpdateSchoolGradeRequestDto } from './_types/update-school-grade-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolGradeService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolGradePaginationParamsDto,
  ): Promise<PaginationResponse<SchoolGrade, SchoolGradePaginationParamsDto>> {
    return await Pagination.fetch(this.prisma, 'schoolGrade', params);
  }

  async find(id: string): Promise<SchoolGrade> {
    return await this.prisma.schoolGrade.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolGradeRequestDto): Promise<SchoolGrade> {
    return await this.prisma.schoolGrade.create({ data: data as any });
  }

  async update(
    id: string,
    data: UpdateSchoolGradeRequestDto,
  ): Promise<SchoolGrade> {
    return await this.prisma.schoolGrade.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolGrade> {
    return await this.prisma.schoolGrade.delete({ where: { id } });
  }
}
