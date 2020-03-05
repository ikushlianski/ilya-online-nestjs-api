import { Connection } from 'mongoose';

import { CvSchema } from './cv.schema';
import { CV_MODEL_PROVIDER, DB_PROVIDER } from '../db/constants';

export const cvProviders = [
  {
    provide: CV_MODEL_PROVIDER,
    useFactory: (connection: Connection) => connection.model('cv', CvSchema),
    inject: [DB_PROVIDER],
  },
];
