import { DatabaseModule } from '@app/common/database';
import { KafkaModule } from '@app/common/kafka';
import {
  KafkaClientId,
  KafkaGroupId,
  MicroserviceName,
} from '@app/shared/constants';
import { Supplier } from '@app/shared/models';
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
    DatabaseModule.forFeature([Supplier]),
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
