import { CreateCustomerDto } from '@app/shared';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('test')
  async createCustomer(@Payload() createCustomerDto: CreateCustomerDto) {
    await this.appService.createCustomer(createCustomerDto);
  }
}
