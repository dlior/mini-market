import { MicroserviceName } from '@app/shared/constants';
import { CreateSupplierDto } from '@app/shared/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class SupplierService {
  constructor(
    @Inject(MicroserviceName.SupplierMicroservice)
    private readonly supplierClient: ClientKafka,
  ) {}

  createSupplier(createSupplierDto: CreateSupplierDto) {
    this.supplierClient.emit('create_supplier', createSupplierDto);
  }
}
