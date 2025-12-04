// typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { StatusService } from '../modules/status/status.service';

@Injectable()
export class MaintenanceMiddleware implements NestMiddleware {
  constructor(private readonly statusService: StatusService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    await this.statusService.statusCheck();
    next();
  }
}
