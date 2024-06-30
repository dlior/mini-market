import {
  CustomerRequest,
  CustomerRequestOptions,
  CustomerResponse,
} from '../models/customer';

export class CustomerService {
  private static instance: CustomerService;

  private constructor() {}

  static getInstance(): CustomerService {
    if (!CustomerService.instance) {
      CustomerService.instance = new CustomerService();
    }
    return CustomerService.instance;
  }

  async createCustomer(createCustomerDto: CustomerRequest) {
    await fetch('api/v1/customer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createCustomerDto),
    });
  }

  async updateCustomer(updateCustomerDto: CustomerRequest) {
    await fetch('api/v1/customer', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateCustomerDto),
    });
  }

  async deleteCustomer(id: string): Promise<CustomerResponse | null> {
    const response = await fetch(`api/v1/customer/${id}`, { method: 'DELETE' });
    return await response.json();
  }

  async getCustomer(id: string): Promise<CustomerResponse | null> {
    const response = await fetch(`api/v1/customer/${id}`);
    return await response.json();
  }

  async getCustomers({
    limit,
    offset,
  }: CustomerRequestOptions): Promise<CustomerResponse[]> {
    const response = await fetch(
      `api/v1/customers${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
    );
    return await response.json();
  }
}
