import {
  HttpExceptionFilter,
  TypeOrmExceptionFilter,
} from '@app/common/exceptions';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule, { cors: true });
  const configService = app.get(ConfigService);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new HttpExceptionFilter(), new TypeOrmExceptionFilter());
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
