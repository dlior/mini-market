import {
  CreateCustomerDto,
  CreateEmployeeDto,
  CreateShipperDto,
  CreateSupplierDto,
} from '@app/shared/models';
import { base, de, en, Faker } from '@faker-js/faker';

const faker = new Faker({
  locale: [base, de, en],
});

export const generateFakeCustomer = (): CreateCustomerDto => ({
  name: faker.person.fullName(),
  contact: faker.person.fullName(),
  address: faker.location.street(),
  city: faker.location.city(),
  country: faker.location.country(),
  postalCode: faker.location.zipCode(),
});

export const generateFakeEmployee = (): CreateEmployeeDto => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  birthdate: faker.date.birthdate(),
  photo: faker.image.url(),
  notes: faker.person.bio(),
});

export const generateFakeShipper = (): CreateShipperDto => ({
  name: faker.person.fullName(),
  phone: faker.phone.number(),
});

export const generateFakeSupplier = (): CreateSupplierDto => ({
  name: faker.person.fullName(),
  contact: faker.person.fullName(),
  address: faker.location.street(),
  city: faker.location.city(),
  country: faker.location.country(),
  postalCode: faker.location.zipCode(),
  phone: faker.phone.number(),
});
