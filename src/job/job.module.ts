import { Module } from '@nestjs/common';

import { JobController } from './job.controller';
import { JobService } from './job.service';
import { jobProviders } from './job.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [JobController],
  providers: [JobService, ...jobProviders],
})
export class JobModule {}
