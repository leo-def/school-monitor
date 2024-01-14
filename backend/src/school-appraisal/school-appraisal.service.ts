import { Injectable } from '@nestjs/common';
import { SchoolAppraisal, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolAppraisalPaginationParamsDto } from './_types/school-appraisal-pagination-params.dto';
import { CreateSchoolAppraisalRequestDto } from './_types/create-school-appraisal-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolAppraisalService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolAppraisalPaginationParamsDto,
  ): Promise<
    PaginationResponse<SchoolAppraisal, SchoolAppraisalPaginationParamsDto>
  > {
    return await Pagination.fetch(this.prisma, 'schoolAppraisal', params);
  }

  async find(id: string): Promise<SchoolAppraisal> {
    return await this.prisma.schoolAppraisal.findFirst({ where: { id } });
  }

  async create(
    data: CreateSchoolAppraisalRequestDto,
  ): Promise<SchoolAppraisal> {
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
    const { where, ...query } = Pagination.paramsToQuery(params, undefined);
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
