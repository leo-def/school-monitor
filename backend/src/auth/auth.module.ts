import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NotificationModule } from 'src/notification/notification.module';
import { AccountModule } from 'src/account/account.module';
import { AuthService } from './_services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AppAuthGuard } from './_guards/app-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    PrismaModule,
    NotificationModule,
    AccountModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AppAuthGuard,
    },
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
