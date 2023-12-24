import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import {
  Action,
  Permission,
  Source,
  Subject,
  SystemRole,
} from '@prisma/client';
import { HashService } from 'src/hash/_services/hash.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AppInitService implements OnApplicationBootstrap {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashService: HashService,
  ) {}
  async onApplicationBootstrap(): Promise<void> {
    await this.init();
  }

  private async init(): Promise<void> {
    Logger.log('AppInitService.init');
    await this.createAccounts();
    await this.createPermissions();
  }

  private async createAccounts(): Promise<void> {
    Logger.log(
      `AppInitService.createAccounts -> create: ${process.env.INIT_ACCOUNTS_ADMIN}`,
    );
    if (!process.env.INIT_ACCOUNTS_ADMIN) {
      return;
    }
    const find = await this.prisma.account.findFirst({
      where: { username: process.env.INIT_ACCOUNTS_ADMIN_USERNAME },
    });
    if (!find) {
      const password = await this.hashService.generateHash(
        process.env.INIT_ACCOUNTS_ADMIN_PASSWORD,
      );
      await this.prisma.account.create({
        data: {
          name: process.env.INIT_ACCOUNTS_ADMIN_NAME,
          username: process.env.INIT_ACCOUNTS_ADMIN_USERNAME,
          phone: process.env.INIT_ACCOUNTS_ADMIN_PHONE,
          email: process.env.INIT_ACCOUNTS_ADMIN_EMAIL,
          password,
          role: SystemRole[process.env.INIT_ACCOUNTS_ADMIN_ROLE],
          source: Source.SYSTEM,
          active: true,
        },
      });
    }
  }

  private async createPermissions(): Promise<void> {
    Logger.log(
      `AppInitService.createPermissions -> create: ${process.env.INIT_PERMISSIONS}`,
    );
    if (!process.env.INIT_PERMISSIONS) {
      return;
    }
    const actions = [
      Action.MANAGE,
      Action.CREATE,
      Action.UPDATE,
      Action.READ,
      Action.DELETE,
    ];
    const subjects = [Subject.ACCOUNT];
    const permissions = [];
    for (const subject of subjects) {
      for (const action of actions) {
        const find = await this.prisma.permission.findFirst({
          where: { subject, action },
        });
        if (!find) {
          const permission = await this.prisma.permission.create({
            data: { subject, action, collaborator: false },
          });
          permissions.push(permission);
        }
      }
    }
    await this.createAdminRbacs(permissions);
  }

  private async createAdminRbacs(
    permissions: Array<Permission>,
  ): Promise<void> {
    Logger.log(
      `AppInitService.createAdminRbacs -> create: ${process.env.INIT_ADMIN_RBACS}`,
    );
    if (!process.env.INIT_ADMIN_RBACS) {
      return;
    }
    for (const permission of permissions) {
      await this.prisma.rbac.create({
        data: {
          systemRole: SystemRole.ADMIN,
          permissionId: permission.id,
        },
      });
    }
  }
}
