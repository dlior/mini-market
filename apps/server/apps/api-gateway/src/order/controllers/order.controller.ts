import { CreateOrderDto } from '@app/shared/models';
import { Body, Controller, Post } from '@nestjs/common';

import { OrderService } from '../services';

@Controller('v1')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('order')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    this.orderService.createOrder(createOrderDto);
  }
}
