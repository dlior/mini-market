import {
  KafkaClientId,
  KafkaGroupId,
  KafkaModule,
  MicroserviceName,
} from '@app/shared';
import { Module } from '@nestjs/common';

import { CustomerController } from './controllers';
import { CustomerService } from './services';

@Module({
  imports: [
    KafkaModule.register({
      name: MicroserviceName.CustomerMicroservice,
      clientId: KafkaClientId.CustomerClientId,
      producerOnlyMode: true,
      groupId: KafkaGroupId.CustomerGroupId,
    }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
