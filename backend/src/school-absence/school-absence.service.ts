import { Injectable } from '@nestjs/common';
import { SchoolAbsence, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolAbsencePaginationParamsDto } from './_types/school-absence-pagination-params.dto';

@Injectable()
export class SchoolAbsenceService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolAbsencePaginationParamsDto,
  ): Promise<Array<SchoolAbsence>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolAbsence.findMany(query);
  }

  async find(id: string): Promise<SchoolAbsence> {
    return await this.prisma.schoolAbsence.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolAbsence>): Promise<SchoolAbsence> {
    return await this.prisma.schoolAbsence.create({ data: data as any });
  }

  async update(
    id: string,
    data: Partial<SchoolAbsence>,
  ): Promise<SchoolAbsence> {
    return await this.prisma.schoolAbsence.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolAbsence> {
    return await this.prisma.schoolAbsence.delete({ where: { id } });
  }

  async section(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolAbsence & { schoolSection: SchoolSection }>> {
    const { where, ...query } = Pagination.paramsToQuery(params) as any;
    return await this.prisma.schoolAbsence.findMany<{
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
