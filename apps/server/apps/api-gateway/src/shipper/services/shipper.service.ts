import { generateFakeShipper } from '@app/common/utils';
import { MicroserviceName } from '@app/shared/constants';
import { CreateShipperDto } from '@app/shared/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class ShipperService {
  constructor(
    @Inject(MicroserviceName.ShipperMicroservice)
    private readonly shipperClient: ClientKafka,
  ) {}

  createShipper(createShipperDto: CreateShipperDto) {
    console.log(createShipperDto);
    this.shipperClient.emit('create_shipper', generateFakeShipper());
  }
}
