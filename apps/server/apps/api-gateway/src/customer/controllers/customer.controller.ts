import { CustomerInterceptor } from '@app/common/interceptors';
import {
  CreateCustomerDto,
  Customer,
  UpdateCustomerDto,
} from '@app/shared/models';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';

import { CustomerService } from '../services';

@Controller('v1')
@UseInterceptors(new CustomerInterceptor())
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('customer')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customerService.createCustomer(createCustomerDto);
  }

  @Put('customer/:id')
  async updateCustomer(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer | null> {
    return await this.customerService.updateCustomer(id, updateCustomerDto);
  }

  @Delete('customer/:id')
  async deleteCustomer(@Param('id') id: string): Promise<Customer | null> {
    return await this.customerService.deleteCustomer(id);
  }

  @Get('customer/:id')
  async getCustomer(@Param('id') id: string): Promise<Customer | null> {
    return await this.customerService.getCustomer(id);
  }

  @Get('customers')
  async getCustomers(
    @Query('limit', new ParseIntPipe({ optional: true })) limit?: number,
    @Query('offset', new ParseIntPipe({ optional: true })) offset?: number,
  ): Promise<Customer[]> {
    return await this.customerService.getCustomers(limit, offset);
  }
}
