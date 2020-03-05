import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { CV } from './cv.interface';
import { CV_MODEL_PROVIDER } from '../db/constants';

@Injectable()
export class CvService {
  constructor(@Inject(CV_MODEL_PROVIDER) private readonly cvModel: Model<CV>) {}

  async findAll(): Promise<CV[]> {
    return await this.cvModel.find().exec();
  }
}
