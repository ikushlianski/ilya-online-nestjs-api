import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Skill } from './skill.interface';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill') private readonly skillModel: Model<Skill>,
  ) {}

  async findAll(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }
}
