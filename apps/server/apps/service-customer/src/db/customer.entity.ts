import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  contact: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  postalCode: number;

  @Column({ nullable: false })
  country: string;

  constructor(partial: Partial<Customer>) {
    Object.assign(this, partial);
  }
}
