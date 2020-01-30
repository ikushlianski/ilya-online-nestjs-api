import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';

const connectionUri = `mongodb+srv://root:${process.env.DB_PASS}@ilya-online-cluster-ppatt.mongodb.net/test?retryWrites=true&w=majority`;

@Module({
  imports: [SkillsModule, MongooseModule.forRoot(connectionUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
