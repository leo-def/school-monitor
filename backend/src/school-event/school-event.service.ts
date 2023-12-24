import { Injectable } from '@nestjs/common';
import { SchoolEvent, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolEventPaginationParamsDto } from './_types/school-event-pagination-params.dto';
import { UpdateSchoolEventRequestDto } from './_types/update-school-event-request.dto';
import { CreateSchoolEventRequestDto } from './_types/create-school-event-request.dto';

@Injectable()
export class SchoolEventService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolEventPaginationParamsDto,
  ): Promise<Array<SchoolEvent>> {
    const query = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.schoolEvent.findMany(query);
  }

  async find(id: string): Promise<SchoolEvent> {
    return await this.prisma.schoolEvent.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolEventRequestDto): Promise<SchoolEvent> {
    return await this.prisma.schoolEvent.create({ data: data as any });
  }

  async update(
    id: string,
    data: UpdateSchoolEventRequestDto,
  ): Promise<SchoolEvent> {
    return await this.prisma.schoolEvent.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolEvent> {
    return await this.prisma.schoolEvent.delete({ where: { id } });
  }

  async section(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolEvent & { schoolSection: SchoolSection }>> {
    const { where, ...query } = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.schoolEvent.findMany<{
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
