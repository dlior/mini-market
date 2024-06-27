import { CreateCustomerDto, MicroserviceName } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class CustomerService {
  constructor(
    @Inject(MicroserviceName.CustomerMicroservice)
    private readonly customerClient: ClientKafka,
  ) {}

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customerClient.emit('test', createCustomerDto);
  }
}
