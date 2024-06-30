export interface CustomerResponse {
  id: string;
  name: string;
  contact: string;
  address: string;
  city: string;
  country: string;
  postalCode: number;
}

export interface CustomerRequest {
  name?: string;
  contact?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: number;
}

export interface CustomerRequestOptions {
  limit?: number;
  offset?: number;
}
