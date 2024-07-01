import { logLevel, Partitioners } from 'kafkajs';

import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { KafkaOptionsModel } from './kafka-options.model';
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
    fetchMinBytes,
    fetchMaxBytes,
    fetchMaxWaitMs,
  }: KafkaOptionsModel): DynamicModule {
    return {
      module: KafkaModule,
      imports: [
        ConfigModule,
        ClientsModule.registerAsync([
          {
            name,
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId,
                  brokers: [configService.getOrThrow('KAFKA_BROKER_URL')],
                  retry: {
                    maxRetryTime: 2,
                    logLevel: logLevel.ERROR,
                  },
                  fetchMinBytes,
                  fetchMaxBytes,
                  fetchMaxWaitMs,
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
          },
        ]),
      ],
      providers: [KafkaService],
      exports: [ClientsModule],
    };
  }
}
