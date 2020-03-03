import { Connection } from 'mongoose';

import { WorkSchema } from './work.schema';
import { SKILL_MODEL_PROVIDER, DB_PROVIDER } from '../db/constants';

export const workProviders = [
  {
    provide: SKILL_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Work', WorkSchema),
    inject: [DB_PROVIDER],
  },
];
