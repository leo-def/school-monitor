import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyPaginationParamsDto } from './_types/company-pagination-params.dto';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(params: CompanyPaginationParamsDto): Promise<Array<Company>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.company.findMany(query);
  }

  async find(id: string): Promise<Company> {
    return await this.prisma.company.findFirst({ where: { id } });
  }

  async create(data: Partial<Company>): Promise<Company> {
    return await this.prisma.company.create({ data: data as any });
  }

  async update(id: string, data: Partial<Company>): Promise<Company> {
    return await this.prisma.company.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Company> {
    return await this.prisma.company.delete({ where: { id } });
  }
}
