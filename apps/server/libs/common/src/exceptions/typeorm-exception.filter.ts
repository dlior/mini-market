import { Request, Response } from 'express';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

type Exceptions = EntityNotFoundError | QueryFailedError;

@Catch(EntityNotFoundError, QueryFailedError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: Exceptions, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = this.getExceptionStatusCode(exception);
    const message = exception.name;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    });
  }

  private getExceptionStatusCode(exception: Exceptions): number {
    if (exception instanceof EntityNotFoundError) {
      return HttpStatus.NOT_FOUND;
    }
    return HttpStatus.INTERNAL_SERVER_ERROR;
  }
}
