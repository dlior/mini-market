import { DatabaseModule } from '@app/common/database';
import { KafkaModule } from '@app/common/kafka';
import {
  KafkaClientId,
  KafkaGroupId,
  MicroserviceName,
} from '@app/shared/constants';
import { Customer } from '@app/shared/models';
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
    DatabaseModule.forFeature([Customer]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
