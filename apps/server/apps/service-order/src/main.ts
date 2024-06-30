import { TypeOrmExceptionFilter } from '@app/common/exceptions';
import { KafkaService } from '@app/common/kafka';
import { KafkaGroupId } from '@app/shared/constants';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const kafkaService = app.get(KafkaService);
  app.connectMicroservice<MicroserviceOptions>(
    kafkaService.getKafkaOptions({ groupId: KafkaGroupId.OrderGroupId }),
  );
  app.useGlobalFilters(new TypeOrmExceptionFilter());
  await app.startAllMicroservices();
}
bootstrap();
