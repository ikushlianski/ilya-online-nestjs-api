import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // in reality should be kinda FRONTEND_URL from .env
    origin: '*',
  });

  await app.listen(3001);
}
bootstrap();
