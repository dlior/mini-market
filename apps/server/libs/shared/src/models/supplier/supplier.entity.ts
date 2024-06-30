import { Column, Entity } from 'typeorm';

import { BaseEntity } from '../base-entity';

@Entity('suppliers')
export class Supplier extends BaseEntity {
  @Column({ nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  contact: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  country: string;

  @Column({ nullable: false })
  postalCode: number;

  @Column({ nullable: false, type: 'varchar', length: 255 })
  phone: string;

  constructor(partial: Partial<Supplier>) {
    super();
    Object.assign(this, partial);
  }
}
