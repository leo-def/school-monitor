import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompanyPaginationParamsDto } from './_types/company-pagination-params.dto';
import { UpdateCompanyRequestDto } from './_types/update-company-request.dto';
import { CreateCompanyRequestDto } from './_types/create-company-request.dto';
import { PaginationResponse } from 'src/pagination/_types/response';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: CompanyPaginationParamsDto,
  ): Promise<PaginationResponse<Company, CompanyPaginationParamsDto>> {
    return await Pagination.fetch(this.prisma, 'company', params);
  }

  async find(id: string): Promise<Company> {
    return await this.prisma.company.findFirst({ where: { id } });
  }

  async create(data: CreateCompanyRequestDto): Promise<Company> {
    return await this.prisma.company.create({ data: data as any });
  }

  async update(id: string, data: UpdateCompanyRequestDto): Promise<Company> {
    return await this.prisma.company.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Company> {
    return await this.prisma.company.delete({ where: { id } });
  }
}
