import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillModule } from './skill';
import { DatabaseModule } from './db/database.module';
import { JobModule } from './job';
import { CvModule } from './cv';
import { WorkModule } from './work';

@Module({
  imports: [
    /*
    Custom modules
     */
    SkillModule,
    JobModule,
    CvModule,
    WorkModule,

    /*
    Database
     */
    DatabaseModule,

    /*
    Config
     */
    ConfigModule.forRoot({
      isGlobal: true,
      // validationSchemas could be here...
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
