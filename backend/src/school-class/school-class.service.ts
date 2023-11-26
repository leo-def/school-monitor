import { Injectable } from '@nestjs/common';
import { SchoolClass } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolClassPaginationParamsDto } from './_types/school-class-pagination-params.dto';

@Injectable()
export class SchoolClassService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolClassPaginationParamsDto,
  ): Promise<Array<SchoolClass>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolClass.findMany(query);
  }

  async find(id: string): Promise<SchoolClass> {
    return await this.prisma.schoolClass.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolClass>): Promise<SchoolClass> {
    return await this.prisma.schoolClass.create({ data: data as any });
  }

  async update(id: string, data: Partial<SchoolClass>): Promise<SchoolClass> {
    return await this.prisma.schoolClass.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolClass> {
    return await this.prisma.schoolClass.delete({ where: { id } });
  }
}
