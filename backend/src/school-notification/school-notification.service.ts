import { Injectable } from '@nestjs/common';
import { SchoolNotification, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolNotificationPaginationParamsDto } from './_types/school-notification-pagination-params.dto';

@Injectable()
export class SchoolNotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolNotificationPaginationParamsDto,
  ): Promise<Array<SchoolNotification>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolNotification.findMany(query);
  }

  async find(id: string): Promise<SchoolNotification> {
    return await this.prisma.schoolNotification.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolNotification>): Promise<SchoolNotification> {
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
    const { where, ...query } = Pagination.paramsToQuery(params) as any;
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
