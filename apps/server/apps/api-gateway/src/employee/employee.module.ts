import { DatabaseModule } from '@app/common/database';
import { KafkaModule } from '@app/common/kafka';
import {
  KafkaClientId,
  KafkaGroupId,
  MicroserviceName,
} from '@app/shared/constants';
import { Employee } from '@app/shared/models';
import { Module } from '@nestjs/common';

import { EmployeeController } from './controllers';
import { EmployeeService } from './services';

@Module({
  imports: [
    KafkaModule.register({
      name: MicroserviceName.EmployeeMicroservice,
      clientId: KafkaClientId.EmployeeClientId,
      producerOnlyMode: true,
      groupId: KafkaGroupId.EmployeeGroupId,
      fetchMaxBytes: 1048576,
      fetchMaxWaitMs: 5000,
    }),
    DatabaseModule.forFeature([Employee]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
