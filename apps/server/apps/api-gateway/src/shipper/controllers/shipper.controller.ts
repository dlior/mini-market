import { CreateShipperDto } from '@app/shared/models';
import { Body, Controller, Post } from '@nestjs/common';

import { ShipperService } from '../services';

@Controller('v1')
export class ShipperController {
  constructor(private readonly shipperService: ShipperService) {}

  @Post('shipper')
  createShipper(@Body() createShipperDto: CreateShipperDto) {
    this.shipperService.createShipper(createShipperDto);
  }
}
