import { Module } from '@nestjs/common';

import { CvController } from './cv.controller';
import { CvService } from './cv.service';
import { cvProviders } from './cv.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CvController],
  providers: [CvService, ...cvProviders],
})
export class CvModule {}
