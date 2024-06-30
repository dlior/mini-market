import { Repository } from 'typeorm';

import { CreateSupplierDto, Supplier } from '@app/shared/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>,
  ) {}

  async createSupplier(createSupplierDto: CreateSupplierDto) {
    const supplier = this.supplierRepository.create(createSupplierDto);
    await this.supplierRepository.save(supplier);
  }
}
