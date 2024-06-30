import { Exclude } from 'class-transformer';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ nullable: false, default: () => 'NOW()' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  @Exclude()
  updatedAt: Date;

  @DeleteDateColumn({ default: null })
  @Exclude()
  deletedAt: Date;
}
