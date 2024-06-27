import {
  KafkaClientId,
  KafkaGroupId,
  KafkaModule,
  MicroserviceName,
} from '@app/shared';
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
    }),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
