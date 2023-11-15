import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [CompanyModule, BranchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
