import { CreateEmployeeDto } from '@app/shared/models';
import { Body, Controller, Post } from '@nestjs/common';

import { EmployeeService } from '../services';

@Controller('v1')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('employee')
  createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    this.employeeService.createEmployee(createEmployeeDto);
  }
}
