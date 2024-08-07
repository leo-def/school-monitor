import { Injectable } from '@nestjs/common';
import { GradeTemplate } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGradeTemplateRequestDto } from './_types/create-grade-template-request.dto';
import { GradeTemplatePaginationParamsDto } from './_types/grade-template-pagination-params.dto';
import { UpdateGradeTemplateRequestDto } from './_types/update-grade-template-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class GradeTemplateService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: GradeTemplatePaginationParamsDto,
  ): Promise<
    PaginationResponse<GradeTemplate, GradeTemplatePaginationParamsDto>
  > {
    return await Pagination.fetch(this.prisma, 'gradeTemplate', params);
  }

  async find(id: string): Promise<GradeTemplate> {
    return await this.prisma.gradeTemplate.findFirst({ where: { id } });
  }

  async create(data: CreateGradeTemplateRequestDto): Promise<GradeTemplate> {
    return await this.prisma.gradeTemplate.create({ data: data as any });
  }

  async update(
    id: string,
    data: UpdateGradeTemplateRequestDto,
  ): Promise<GradeTemplate> {
    return await this.prisma.gradeTemplate.update({ where: { id }, data });
  }

  async delete(id: string): Promise<GradeTemplate> {
    return await this.prisma.gradeTemplate.delete({ where: { id } });
  }
}
