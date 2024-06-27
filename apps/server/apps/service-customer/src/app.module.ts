import { DatabaseModule, KafkaModule } from '@app/shared';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './controllers';
import { Customer } from './db';
import { AppService } from './services';

@Module({
  imports: [
    KafkaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule.forFeature([Customer]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
