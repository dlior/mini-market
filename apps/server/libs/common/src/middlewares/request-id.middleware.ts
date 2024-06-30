import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(_req: Request, res: Response, next: NextFunction) {
    res.setHeader('x-request-id', uuidv4());
    next();
  }
}
