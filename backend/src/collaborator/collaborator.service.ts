import { Injectable } from '@nestjs/common';
import { Collaborator } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pagination } from 'src/pagination/_services/pagination.service';
import { CollaboratorPaginationParamsDto } from './_types/collaborator-pagination-params.dto';

@Injectable()
export class CollaboratorService {
  constructor(private readonly prisma: PrismaService) {}

  async fetch(
    params: CollaboratorPaginationParamsDto,
  ): Promise<Array<Collaborator>> {
    const query = Pagination.paramsToQuery(params);
    return await this.prisma.collaborator.findMany(query);
  }

  async find(id: string): Promise<Collaborator> {
    return await this.prisma.collaborator.findFirst({ where: { id } });
  }

  async create(data: Partial<Collaborator>): Promise<Collaborator> {
    return await this.prisma.collaborator.create({ data: data as any });
  }

  async update(id: string, data: Partial<Collaborator>): Promise<Collaborator> {
    return await this.prisma.collaborator.update({ where: { id }, data });
  }

  async delete(id: string): Promise<Collaborator> {
    return await this.prisma.collaborator.delete({ where: { id } });
  }
}
