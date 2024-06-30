import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../base-entity';
import { Order } from '../order';

@Entity('employees')
export class Employee extends BaseEntity {
  @Column({ nullable: false, type: 'varchar', length: 255 })
  lastName: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  firstName: string;

  @Column({ nullable: false })
  birthdate: Date;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  photo: string;

  @Column({ nullable: false, type: 'text' })
  notes: string;

  @OneToMany(() => Order, (order) => order.employee, { onDelete: 'SET NULL' })
  orders: Order[];

  constructor(partial: Partial<Employee>) {
    super();
    Object.assign(this, partial);
  }
}
