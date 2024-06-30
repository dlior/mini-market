import { Repository } from 'typeorm';

import { CreateOrderDto, Order } from '@app/shared/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const order = this.orderRepository.create(createOrderDto);
    await this.orderRepository.save(order);
  }
}
