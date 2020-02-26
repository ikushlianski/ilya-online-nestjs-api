import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Skill } from './skill.interface';
import { SKILL_MODEL_PROVIDER } from '../db/constants';

@Injectable()
export class SkillService {
  constructor(
    @Inject(SKILL_MODEL_PROVIDER) private readonly skillModel: Model<Skill>,
  ) {}

  async findAll(): Promise<Skill[]> {
    return await this.skillModel.find().exec();
  }

  async create(skill) {
    return await this.skillModel.create(skill);
  }
}
