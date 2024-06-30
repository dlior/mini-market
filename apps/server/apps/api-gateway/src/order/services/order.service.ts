import { MicroserviceName } from '@app/shared/constants';
import { CreateOrderDto } from '@app/shared/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    @Inject(MicroserviceName.OrderMicroservice)
    private readonly orderClient: ClientKafka,
  ) {}

  createOrder(createOrderDto: CreateOrderDto) {
    this.orderClient.emit('create_order', createOrderDto);
  }
}
