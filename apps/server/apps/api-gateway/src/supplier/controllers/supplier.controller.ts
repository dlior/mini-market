import { CreateSupplierDto } from '@app/shared/models';
import { Body, Controller, Post } from '@nestjs/common';

import { SupplierService } from '../services';

@Controller('v1')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post('supplier')
  createSupplier(@Body() createSupplierDto: CreateSupplierDto) {
    this.supplierService.createSupplier(createSupplierDto);
  }
}
