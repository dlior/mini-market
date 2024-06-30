import { Repository } from 'typeorm';

import { CreateShipperDto, Shipper } from '@app/shared/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Shipper)
    private readonly shipperRepository: Repository<Shipper>,
  ) {}

  async createShipper(createShipperDto: CreateShipperDto) {
    const shipper = this.shipperRepository.create(createShipperDto);
    await this.shipperRepository.save(shipper);
  }
}
