export interface KafkaOptionsModel {
  name: string;
  clientId: string;
  producerOnlyMode?: boolean;
  groupId: string;
}
