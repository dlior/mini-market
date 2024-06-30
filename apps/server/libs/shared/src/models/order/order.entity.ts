import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '../base-entity';
import { Customer } from '../customer';
import { Employee } from '../empolyee';
import { Shipper } from '../shipper';
import { OrderStatus } from './order-status.enum';

@Entity('orders')
export class Order extends BaseEntity {
  @Column({ type: 'enum', enum: OrderStatus, default: null })
  status: OrderStatus;

  @ManyToOne(() => Customer, (customer) => customer.orders, {
    onDelete: 'SET NULL',
  })
  customer: Customer;

  @ManyToOne(() => Employee, (employee) => employee.orders, {
    onDelete: 'SET NULL',
  })
  employee: Employee;

  @ManyToOne(() => Shipper, (shipper) => shipper.orders, {
    onDelete: 'SET NULL',
  })
  shipper: Shipper;

  constructor(partial: Partial<Order>) {
    super();
    Object.assign(this, partial);
  }
}
