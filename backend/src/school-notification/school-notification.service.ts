import { Injectable } from '@nestjs/common';
import { SchoolNotification, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolNotificationPaginationParamsDto } from './_types/school-notification-pagination-params.dto';
import { CreateSchoolNotificationRequestDto } from './_types/create-school-notification-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class SchoolNotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolNotificationPaginationParamsDto,
  ): Promise<
    PaginationResponse<
      SchoolNotification,
      SchoolNotificationPaginationParamsDto
    >
  > {
    return await Pagination.fetch(this.prisma, 'schoolNotification', params);
  }

  async find(id: string): Promise<SchoolNotification> {
    return await this.prisma.schoolNotification.findFirst({ where: { id } });
  }

  async create(
    data: CreateSchoolNotificationRequestDto,
  ): Promise<SchoolNotification> {
    return await this.prisma.schoolNotification.create({ data: data as any });
  }

  async update(
    id: string,
    data: Partial<SchoolNotification>,
  ): Promise<SchoolNotification> {
    return await this.prisma.schoolNotification.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolNotification> {
    return await this.prisma.schoolNotification.delete({ where: { id } });
  }

  async section(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolNotification & { schoolSection: SchoolSection }>> {
    const { where, ...query } = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.schoolNotification.findMany<{
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
