import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { AppService } from './service/app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  app.get(AppService);
}

bootstrap();
