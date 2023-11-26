import { Injectable } from '@nestjs/common';
import { SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from './_types/school-section-pagination-params.dto';

@Injectable()
export class SchoolSectionService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolSection>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolSection.findMany(query);
  }

  async find(id: string): Promise<SchoolSection> {
    return await this.prisma.schoolSection.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolSection>): Promise<SchoolSection> {
    return await this.prisma.schoolSection.create({ data: data as any });
  }

  async update(
    id: string,
    data: Partial<SchoolSection>,
  ): Promise<SchoolSection> {
    return await this.prisma.schoolSection.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolSection> {
    return await this.prisma.schoolSection.delete({ where: { id } });
  }
}
