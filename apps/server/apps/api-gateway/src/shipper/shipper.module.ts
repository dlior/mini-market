import { KafkaModule } from '@app/common/kafka';
import {
  KafkaClientId,
  KafkaGroupId,
  MicroserviceName,
} from '@app/shared/constants';
import { Module } from '@nestjs/common';

import { ShipperController } from './controllers';
import { ShipperService } from './services';

@Module({
  imports: [
    KafkaModule.register({
      name: MicroserviceName.ShipperMicroservice,
      clientId: KafkaClientId.ShipperClientId,
      producerOnlyMode: true,
      groupId: KafkaGroupId.ShipperGroupId,
    }),
  ],
  controllers: [ShipperController],
  providers: [ShipperService],
})
export class ShipperModule {}
