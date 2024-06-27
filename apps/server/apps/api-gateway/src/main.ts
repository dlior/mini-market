import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { ApiGatewayModule } from './api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
