import { Injectable } from '@nestjs/common';
import { SchoolSubject } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSubjectPaginationParamsDto } from './_types/school-subject-pagination-params.dto';

@Injectable()
export class SchoolSubjectService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: SchoolSubjectPaginationParamsDto,
  ): Promise<Array<SchoolSubject>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.schoolSubject.findMany(query);
  }

  async find(id: string): Promise<SchoolSubject> {
    return await this.prisma.schoolSubject.findFirst({ where: { id } });
  }

  async create(data: Partial<SchoolSubject>): Promise<SchoolSubject> {
    return await this.prisma.schoolSubject.create({ data: data as any });
  }

  async update(
    id: string,
    data: Partial<SchoolSubject>,
  ): Promise<SchoolSubject> {
    return await this.prisma.schoolSubject.update({ where: { id }, data });
  }

  async delete(id: string): Promise<SchoolSubject> {
    return await this.prisma.schoolSubject.delete({ where: { id } });
  }
}
