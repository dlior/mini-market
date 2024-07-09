export interface DataEntity {
  id: string;
}

export interface Customer extends DataEntity {
  name: string;
  contact: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export interface Employee extends DataEntity {
  firstName: string;
  lastName: string;
  birthdate: Date;
  photo: string;
  notes: string;
}

export interface Shipper extends DataEntity {
  name: string;
  phone: string;
}

export interface Supplier extends DataEntity {
  name: string;
  contact: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  phone: string;
}

export interface DataEntityMap {
  customer: Customer;
  employee: Employee;
  shipper: Shipper;
  supplier: Supplier;
}

export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}s`]: () => Promise<T[K][]>;
};

export class Store implements Getters<DataEntityMap> {
  async getCustomers(limit?: number, offset?: number): Promise<Customer[]> {
    const response = await fetch(
      `api/v1/customers${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
    );
    return await response.json();
  }

  async getEmployees(limit?: number, offset?: number): Promise<Employee[]> {
    const response = await fetch(
      `api/v1/employees${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
    );
    return await response.json();
  }

  async getShippers(limit?: number, offset?: number): Promise<Shipper[]> {
    const response = await fetch(
      `api/v1/shippers${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
    );
    return await response.json();
  }

  async getSuppliers(limit?: number, offset?: number): Promise<Supplier[]> {
    const response = await fetch(
      `api/v1/suppliers${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
    );
    return await response.json();
  }
}

type Resource = 'customer' | 'employee';

type GetItemsOptions = {
  resource: Resource;
  limit?: number;
  offset?: number;
};

export class MyService {
  async getItems<T>(options: GetItemsOptions): Promise<T[]> {
    const { resource, limit, offset } = options;
    const response = await fetch(
      `api/v1/${resource}s${limit ? `?limit=${limit}` : ''}${offset ? `&offset=${offset}` : ''}`
    );
    return await response.json();
  }
}

export const myService = new MyService();
