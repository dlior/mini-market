import { CreateCustomerDto } from '@app/shared';
import { Body, Controller, Post } from '@nestjs/common';

import { CustomerService } from '../services';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomerDto);
  }
}
