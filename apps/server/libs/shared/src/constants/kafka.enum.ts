export enum MicroserviceName {
  CustomerMicroservice = 'CUSTOMER_MICROSERVICE',
  EmployeeMicroservice = 'EMPLOYEE_MICROSERVICE',
  ShipperMicroservice = 'SHIPPER_MICROSERVICE',
  SupplierMicroservice = 'SUPPLIER_MICROSERVICE',
  OrderMicroservice = 'ORDER_MICROSERVICE',
}

export enum KafkaClientId {
  CustomerClientId = 'customer',
  EmployeeClientId = 'employee',
  ShipperClientId = 'shipper',
  SupplierClientId = 'supplier',
  OrderClientId = 'order',
}

export enum KafkaGroupId {
  CustomerGroupId = 'customer-consumer',
  EmployeeGroupId = 'employee-consumer',
  ShipperGroupId = 'shipper-consumer',
  SupplierGroupId = 'supplier-consumer',
  OrderGroupId = 'order-consumer',
}
