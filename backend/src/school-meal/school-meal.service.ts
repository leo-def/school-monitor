import { Injectable } from '@nestjs/common';
import { SchoolMeal, SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from 'src/school-section/_types/school-section-pagination-params.dto';
import { SchoolMealPaginationParamsDto } from './_types/school-meal-pagination-params.dto';

@Injectable()
export class SchoolMealService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolMealPaginationParamsDto,
  ): Promise<Array<SchoolMeal>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolMeal.findMany(query);
  }

  async find(id: string): Promise<SchoolMeal> {
    return await this.prisma.schoolMeal.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolMeal>): Promise<SchoolMeal> {
    return await this.prisma.schoolMeal.create({ data: data as any });
  }

  async update(id: string, data: Partial<SchoolMeal>): Promise<SchoolMeal> {
    return await this.prisma.schoolMeal.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolMeal> {
    return await this.prisma.schoolMeal.delete({ where: { id } });
  }

  async section(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolMeal & { schoolSection: SchoolSection }>> {
    const { where, ...query } = Pagination.paramsToQuery(params) as any;
    return await this.prisma.schoolMeal.findMany<{
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
