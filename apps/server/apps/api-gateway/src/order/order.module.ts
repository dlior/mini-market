import { DatabaseModule } from '@app/common/database';
import { KafkaModule } from '@app/common/kafka';
import {
  KafkaClientId,
  KafkaGroupId,
  MicroserviceName,
} from '@app/shared/constants';
import { Order } from '@app/shared/models';
import { Module } from '@nestjs/common';

import { OrderController } from './controllers';
import { OrderService } from './services';

@Module({
  imports: [
    KafkaModule.register({
      name: MicroserviceName.OrderMicroservice,
      clientId: KafkaClientId.OrderClientId,
      producerOnlyMode: true,
      groupId: KafkaGroupId.OrderGroupId,
    }),
    DatabaseModule.forFeature([Order]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
