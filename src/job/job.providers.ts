import { Connection } from 'mongoose';

import { JobSchema } from './job.schema';
import { DB_PROVIDER, JOB_MODEL_PROVIDER } from '../db/constants';

export const jobProviders = [
  {
    provide: JOB_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('LookingForJob', JobSchema), // resulting db collection is 'skills'
    inject: [DB_PROVIDER],
  },
];
