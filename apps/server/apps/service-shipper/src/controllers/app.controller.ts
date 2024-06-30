import { CreateShipperDto } from '@app/shared/models';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { AppService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_shipper')
  async createShipper(@Payload() createShipperDto: CreateShipperDto) {
    await this.appService.createShipper(createShipperDto);
  }
}
