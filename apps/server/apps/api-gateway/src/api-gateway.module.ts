import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CustomerModule } from './customer';
import { EmployeeModule } from './employee';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CustomerModule,
    EmployeeModule,
  ],
})
export class ApiGatewayModule {}
