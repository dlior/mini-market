import { Partitioners } from 'kafkajs';

import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { KafkaOptionsModel } from '../models';
import { KafkaService } from './services';

@Module({
  imports: [ConfigModule],
  providers: [KafkaService],
})
export class KafkaModule {
  static register({
    name,
    clientId,
    producerOnlyMode,
    groupId,
  }: KafkaOptionsModel): DynamicModule {
    return {
      module: KafkaModule,
      imports: [
        ConfigModule,
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId,
                  brokers: [configService.getOrThrow('KAFKA_BROKER_URL')],
                },
                producerOnlyMode,
                producer: {
                  createPartitioner: Partitioners.DefaultPartitioner,
                },
                consumer: {
                  groupId,
                },
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      providers: [KafkaService],
      exports: [ClientsModule],
    };
  }
}
