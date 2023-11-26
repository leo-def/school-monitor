import { Injectable } from '@nestjs/common';
import { SchoolProject, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolProjectPaginationParamsDto } from './_types/school-project-pagination-params.dto';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';

@Injectable()
export class SchoolProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolProjectPaginationParamsDto,
  ): Promise<Array<SchoolProject>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolProject.findMany(query);
  }

  async find(id: string): Promise<SchoolProject> {
    return await this.prisma.schoolProject.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolProject>): Promise<SchoolProject> {
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
    const { where, ...query } = Pagination.paramsToQuery(params) as any;
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
