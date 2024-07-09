import { Customer } from '@app/shared/models';
import { Test, TestingModule } from '@nestjs/testing';

import { CustomerService } from '../services';
import { CustomerController } from './customer.controller';

const mockCustomer: Customer = {
  id: '1',
  name: 'John Doe',
  contact: 'Garrett Vargas',
  address: 'Panama',
  city: 'Greece',
  country: 'Panama',
  postalCode: '12345',
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
  deletedAt: null,
  orders: [],
};

describe('CustomerController', () => {
  let controller: CustomerController;
  let service: CustomerService;

  beforeEach(async () => {
    const mockCustomerService = {
      createCustomer: jest.fn().mockResolvedValue(mockCustomer),
      updateCustomer: jest.fn().mockResolvedValue(mockCustomer),
      deleteCustomer: jest.fn().mockResolvedValue(mockCustomer),
      getCustomer: jest.fn().mockResolvedValue(mockCustomer),
      getCustomers: jest
        .fn()
        .mockResolvedValue([
          mockCustomer,
          { ...mockCustomer, id: '2' },
          { ...mockCustomer, id: '3' },
        ]),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: CustomerService,
          useValue: mockCustomerService,
        },
      ],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
    service = module.get<CustomerService>(CustomerService);
  });

  describe('createCustomer', () => {
    it('should create a customer', () => {
      controller.createCustomer({
        name: 'John Doe',
        contact: 'Garrett Vargas',
        address: 'Panama',
        city: 'Greece',
        country: 'Panama',
        postalCode: '12345',
      });

      expect(service.createCustomer).toHaveBeenCalledWith({
        name: 'John Doe',
        contact: 'Garrett Vargas',
        address: 'Panama',
        city: 'Greece',
        country: 'Panama',
        postalCode: '12345',
      });
    });
  });

  describe('getCustomers', () => {
    it('should return an array of customers', async () => {
      const customers = await controller.getCustomers();

      expect(service.getCustomers).toHaveBeenCalledWith(undefined, undefined);
      expect(customers).toStrictEqual([
        mockCustomer,
        { ...mockCustomer, id: '2' },
        { ...mockCustomer, id: '3' },
      ]);
    });
  });
});
