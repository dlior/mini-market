import { join } from 'path';

import { RequestIdMiddleware } from '@app/common/middlewares';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { CustomerController, CustomerModule } from './customer';
import { EmployeeController, EmployeeModule } from './employee';
import { OrderController, OrderModule } from './order';
import { ShipperController, ShipperModule } from './shipper';
import { SupplierController, SupplierModule } from './supplier';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => [
        {
          ttl: configService.getOrThrow('RATE_LIMITER_TTL'),
          limit: configService.getOrThrow('RATE_LIMITER_LIMIT'),
        },
      ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../..', 'client', 'dist'),
    }),
    CustomerModule,
    EmployeeModule,
    SupplierModule,
    ShipperModule,
    OrderModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class ApiGatewayModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestIdMiddleware)
      .forRoutes(
        CustomerController,
        EmployeeController,
        SupplierController,
        ShipperController,
        OrderController,
      );
  }
}
