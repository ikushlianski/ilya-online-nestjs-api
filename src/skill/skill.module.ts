import { Module } from '@nestjs/common';

import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { skillProviders } from './skill.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillController],
  providers: [SkillService, ...skillProviders],
})
export class SkillModule {}
