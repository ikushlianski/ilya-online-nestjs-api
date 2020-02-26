import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillModule } from './skill';
import { databaseProviders } from './db/database.providers';
import { DatabaseModule } from './db/database.module';
import { JobModule } from './job';

@Module({
  imports: [
    /*
    Custom modules
     */
    SkillModule,
    JobModule,

    /*
    Database
     */
    DatabaseModule,

    /*
    Config
     */
    ConfigModule.forRoot({
      isGlobal: true,
      // TODO: add Joi validation
      // validationSchema: ...
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
