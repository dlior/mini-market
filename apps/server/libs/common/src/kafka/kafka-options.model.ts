export interface KafkaOptionsModel {
  name: string;
  clientId: string;
  groupId: string;
  producerOnlyMode?: boolean;
  fetchMinBytes?: number;
  fetchMaxBytes?: number;
  fetchMaxWaitMs?: number;
}
