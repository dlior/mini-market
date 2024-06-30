import { Repository } from 'typeorm';

import { MicroserviceName } from '@app/shared/constants';
import {
  CreateCustomerDto,
  Customer,
  UpdateCustomerDto,
} from '@app/shared/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(MicroserviceName.CustomerMicroservice)
    private readonly customerClient: ClientKafka,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customerClient.emit('create_customer', createCustomerDto);
  }

  async updateCustomer(
    id: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer | null> {
    await this.customerRepository.update({ id }, updateCustomerDto);
    return await this.getCustomer(id);
  }

  async deleteCustomer(id: string): Promise<Customer | null> {
    const customer = await this.getCustomer(id);
    return await this.customerRepository.remove(customer);
  }

  async getCustomer(id: string): Promise<Customer | null> {
    return await this.customerRepository.findOneBy({ id });
  }

  async getCustomers(limit?: number, offset?: number): Promise<Customer[]> {
    return await this.customerRepository.find({ take: limit, skip: offset });
  }
}
