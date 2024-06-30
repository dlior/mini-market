import { DatabaseModule } from '@app/common/database';
import { KafkaModule } from '@app/common/kafka';
import { Customer, Employee, Order, Shipper } from '@app/shared/models';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './controllers';
import { AppService } from './services';

@Module({
  imports: [
    KafkaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule.forFeature([Order, Customer, Employee, Shipper]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
