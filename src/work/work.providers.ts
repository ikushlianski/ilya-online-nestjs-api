import { Connection } from 'mongoose';

import { WorkSchema } from './work.schema';
import { DB_PROVIDER, WORK_MODEL_PROVIDER } from '../db/constants';

export const workProviders = [
  {
    provide: WORK_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Work', WorkSchema),
    inject: [DB_PROVIDER],
  },
];
