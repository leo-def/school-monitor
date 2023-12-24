import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SchoolSection } from '@prisma/client';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolSectionPaginationParamsDto } from './_types/school-section-pagination-params.dto';
import { CreateSchoolSectionRequestDto } from './_types/create-school-section-request.dto';
import { SchoolSectionGetOrCreateParamsDto } from './_types/school-section-get-or-create-params.dto';

@Injectable()
export class SchoolSectionService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrCreate(
    params: SchoolSectionGetOrCreateParamsDto,
  ): Promise<Array<SchoolSection>> {
    if (!this.validateGetOrCreateParams(params)) {
      throw new HttpException('Invalid Params', HttpStatus.BAD_REQUEST);
    }
    const schoolSections = await this.prisma.schoolSection.findMany({
      where: params,
    });
    if (schoolSections.length > 0) {
      return schoolSections;
    }
    const newSchoolSection = await this.prisma.schoolSection.create({
      data: {
        company: { connect: { id: params.companyId } },
        branch: { connect: { id: params.branchId } },
        schoolSubject: { connect: { id: params.schoolSubjectId } },
        schoolClass: { connect: { id: params.schoolClassId } },
        schoolTerm: { connect: { id: params.schoolTermId } },
        ...(params.professorId
          ? {
              professor: {
                connect: { id: params.professorId },
              },
            }
          : {}),
      } as any,
    });
    return [newSchoolSection];
  }

  async fetch(
    params: SchoolSectionPaginationParamsDto,
  ): Promise<Array<SchoolSection>> {
    const query = Pagination.paramsToQuery(params, undefined);
    return await this.prisma.schoolSection.findMany(query);
  }

  async find(id: string): Promise<SchoolSection> {
    return await this.prisma.schoolSection.findFirst({ where: { id } });
  }

  async create(data: CreateSchoolSectionRequestDto): Promise<SchoolSection> {
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

  validateGetOrCreateParams(params?: SchoolSectionGetOrCreateParamsDto) {
    return (
      params?.companyId &&
      params?.branchId &&
      params?.schoolSubjectId &&
      params?.schoolClassId &&
      params?.schoolTermId
    );
  }
}
