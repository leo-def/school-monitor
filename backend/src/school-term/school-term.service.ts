import { Injectable } from '@nestjs/common';
import { SchoolTerm } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolTermPaginationParamsDto } from './_types/school-term-pagination-params.dto';

@Injectable()
export class SchoolTermService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolTermPaginationParamsDto,
  ): Promise<Array<SchoolTerm>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolTerm.findMany(query);
  }

  async find(id: string): Promise<SchoolTerm> {
    return await this.prisma.schoolTerm.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolTerm>): Promise<SchoolTerm> {
    return await this.prisma.schoolTerm.create({ data: data as any });
  }

  async update(id: string, data: Partial<SchoolTerm>): Promise<SchoolTerm> {
    return await this.prisma.schoolTerm.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolTerm> {
    return await this.prisma.schoolTerm.delete({ where: { id } });
  }
}
