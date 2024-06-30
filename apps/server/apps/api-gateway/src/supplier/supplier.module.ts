import { KafkaModule } from '@app/common/kafka';
import {
  KafkaClientId,
  KafkaGroupId,
  MicroserviceName,
} from '@app/shared/constants';
import { Module } from '@nestjs/common';

import { SupplierController } from './controllers';
import { SupplierService } from './services';

@Module({
  imports: [
    KafkaModule.register({
      name: MicroserviceName.SupplierMicroservice,
      clientId: KafkaClientId.SupplierClientId,
      producerOnlyMode: true,
      groupId: KafkaGroupId.SupplierGroupId,
    }),
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
