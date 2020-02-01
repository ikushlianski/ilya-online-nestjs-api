import * as mongoose from 'mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DB_PROVIDER } from './constants';

export const databaseProviders = [
  {
    provide: DB_PROVIDER,
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      (mongoose as any).Promise = global.Promise;
      const dbUser = configService.get('DATABASE_USER');
      const dbPassword = configService.get('DATABASE_PASSWORD');
      const uri = `mongodb+srv://${dbUser}:${dbPassword}@ilya-online-cluster-ppatt.mongodb.net/test?retryWrites=true&w=majority`;

      return await mongoose.connect(uri, {
        dbName: 'ilya-online',
        useNewUrlParser: true,
      });
    },
  },
];
