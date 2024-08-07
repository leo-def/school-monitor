import { Injectable } from '@nestjs/common';
import { SchoolProject, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolProjectPaginationParamsDto } from './_types/school-project-pagination-params.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { CreateSchoolProjectRequestDto } from './_types/create-school-project-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolProjectPaginationParamsDto,
  ): Promise<
    PaginationResponse<SchoolProject, SchoolProjectPaginationParamsDto>
  > {
    return await Pagination.fetch(this.prisma, 'schoolProject', params);
  }

  async find(id: string): Promise<SchoolProject> {
    return await this.prisma.schoolProject.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolProjectRequestDto): Promise<SchoolProject> {
    return await this.prisma.schoolProject.create({ data: data as any });
  }

  async update(
    id: string,
    data: Partial<SchoolProject>,
  ): Promise<SchoolProject> {
    return await this.prisma.schoolProject.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolProject> {
    return await this.prisma.schoolProject.delete({ where: { id } });
  }

  async section(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolProject & { schoolSection: SchoolSection }>> {
    const { where, ...query } = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.schoolProject.findMany<{
      include: { schoolSection: true };
    }>({
      ...query,
      where: {
        schoolSection: where,
      },
      include: {
        schoolSection: true,
      },
    });
  }
}
