import { Repository } from 'typeorm';

import { CreateEmployeeDto, Employee } from '@app/shared/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    await this.employeeRepository.save(employee);
  }
}
