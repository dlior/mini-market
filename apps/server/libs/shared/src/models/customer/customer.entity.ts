import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../base-entity';
import { Order } from '../order';
import { CustomerNameTransformer } from './customer.transformer';

@Entity('customers')
export class Customer extends BaseEntity {
  @Column({
    nullable: false,
    length: 255,
    transformer: new CustomerNameTransformer(),
  })
  name: string;

  @Column({ nullable: false, length: 255 })
  contact: string;

  @Column({ nullable: false, length: 255 })
  address: string;

  @Column({ nullable: false, length: 255 })
  city: string;

  @Column({ nullable: false, length: 255 })
  country: string;

  @Column({ nullable: false, length: 255 })
  postalCode: string;

  @OneToMany(() => Order, (order) => order.customer, { onDelete: 'SET NULL' })
  orders: Order[];

  constructor(partial: Partial<Customer>) {
    super();
    Object.assign(this, partial);
  }
}
