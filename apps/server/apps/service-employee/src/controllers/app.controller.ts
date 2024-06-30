import { CreateEmployeeDto } from '@app/shared/models';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_employee')
  async createCustomer(@Payload() createEmployeeDto: CreateEmployeeDto) {
    await this.appService.createEmployee(createEmployeeDto);
  }
}
