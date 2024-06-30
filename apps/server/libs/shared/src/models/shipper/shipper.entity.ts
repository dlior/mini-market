import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../base-entity';
import { Order } from '../order';

@Entity('shippers')
export class Shipper extends BaseEntity {
  @Column({ nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  phone: string;

  @OneToMany(() => Order, (order) => order.shipper, { onDelete: 'SET NULL' })
  orders: Order[];

  constructor(partial: Partial<Shipper>) {
    super();
    Object.assign(this, partial);
  }
}
