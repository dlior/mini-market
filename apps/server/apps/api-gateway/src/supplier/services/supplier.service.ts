import { generateFakeSupplier } from '@app/common/utils';
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
    console.log(createSupplierDto);
    this.supplierClient.emit('create_supplier', generateFakeSupplier());
  }
}
