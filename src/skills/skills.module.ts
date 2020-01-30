import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SkillSchema } from './skill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Skill', schema: SkillSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class SkillsModule {}
