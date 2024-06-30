import { plainToInstance } from 'class-transformer';
import { isArray } from 'class-validator';
import { map, Observable } from 'rxjs';

import { Customer } from '@app/shared/models';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class CustomerInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(
        map((customers) =>
          isArray(customers)
            ? customers.map((customer) => plainToInstance(Customer, customer))
            : plainToInstance(Customer, customers),
        ),
      );
  }
}
