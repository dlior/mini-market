import { Partitioners } from 'kafkajs';

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KafkaOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  constructor(private readonly configService: ConfigService) {}

  getKafkaOptions({ groupId }: { groupId: string }): KafkaOptions {
    return {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [this.configService.getOrThrow('KAFKA_BROKER_URL')],
        },
        producer: {
          createPartitioner: Partitioners.DefaultPartitioner,
        },
        consumer: {
          groupId,
        },
      },
    };
  }
}
