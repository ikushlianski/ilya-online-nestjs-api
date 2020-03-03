import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { Work } from './work.interface';
import { WORK_MODEL_PROVIDER } from '../db/constants';

@Injectable()
export class WorkService {
  constructor(
    @Inject(WORK_MODEL_PROVIDER) private readonly workModel: Model<Work>,
  ) {}

  async findAll(): Promise<Work[]> {
    return await this.workModel.find().exec();
  }
}
