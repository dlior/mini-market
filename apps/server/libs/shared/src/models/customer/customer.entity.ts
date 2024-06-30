import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../base-entity';
import { Order } from '../order';

@Entity('customers')
export class Customer extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  contact: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  postalCode: number;

  @OneToMany(() => Order, (order) => order.customer, { onDelete: 'SET NULL' })
  orders: Order[];

  constructor(partial: Partial<Customer>) {
    super();
    Object.assign(this, partial);
  }
}
