export interface CustomerRequest {
  name: string;
  contact: string;
  address: string;
  postalCode: string;
  country: string;
}

export interface CustomerResponse {
  id: string;
  name: string;
  contact: string;
  address: string;
  postalCode: string;
  country: string;
}
