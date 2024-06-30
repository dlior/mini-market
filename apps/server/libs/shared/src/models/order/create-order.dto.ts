import { IsEnum, IsUUID } from 'class-validator';

import { OrderStatus } from './order-status.enum';

export class CreateOrderDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsUUID()
  customerId: string;

  @IsUUID()
  employeeId: string;

  @IsUUID()
  shipperId: string;
}
