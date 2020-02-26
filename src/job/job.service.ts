import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { JobInterface } from './job.interface';
import { JOB_MODEL_PROVIDER } from '../db/constants';

@Injectable()
export class JobService {
  constructor(
    @Inject(JOB_MODEL_PROVIDER)
    private readonly jobModel: Model<JobInterface>,
  ) {}

  async check(): Promise<JobInterface> {
    return await this.jobModel.findOne().exec();
  }
}
