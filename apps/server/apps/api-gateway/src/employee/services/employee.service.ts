import { MicroserviceName } from '@app/shared/constants';
import { CreateEmployeeDto } from '@app/shared/models';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(MicroserviceName.EmployeeMicroservice)
    private readonly employeeClient: ClientKafka,
  ) {}

  createEmployee(createEmployeeDto: CreateEmployeeDto) {
    this.employeeClient.emit('create_employee', createEmployeeDto);
  }
}
