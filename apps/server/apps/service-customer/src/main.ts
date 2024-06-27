import { KafkaGroupId, KafkaService } from '@app/shared';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const kafkaService = app.get(KafkaService);
  app.connectMicroservice<MicroserviceOptions>(
    kafkaService.getKafkaOptions({ groupId: KafkaGroupId.CustomerGroupId }),
  );
  await app.startAllMicroservices();
}
bootstrap();
