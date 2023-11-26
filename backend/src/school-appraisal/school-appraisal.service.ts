import { Injectable } from '@nestjs/common';
import { SchoolAppraisal, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolAppraisalPaginationParamsDto } from './_types/school-appraisal-pagination-params.dto';

@Injectable()
export class SchoolAppraisalService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolAppraisalPaginationParamsDto,
  ): Promise<Array<SchoolAppraisal>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolAppraisal.findMany(query);
  }

  async find(id: string): Promise<SchoolAppraisal> {
    return await this.prisma.schoolAppraisal.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolAppraisal>): Promise<SchoolAppraisal> {
    return await this.prisma.schoolAppraisal.create({ data: data as any });
  }

  async update(
    id: string,
    data: Partial<SchoolAppraisal>,
  ): Promise<SchoolAppraisal> {
    return await this.prisma.schoolAppraisal.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolAppraisal> {
    return await this.prisma.schoolAppraisal.delete({ where: { id } });
  }

  async section(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolAppraisal & { schoolSection: SchoolSection }>> {
    const { where, ...query } = Pagination.paramsToQuery(params) as any;
    return await this.prisma.schoolAppraisal.findMany<{
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
