import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  private requests = new Map<string, { count: number; resetTime: number }>();

  use(req: Request, res: Response, next: NextFunction) {
    const ip = req.ip;
    const now = Date.now();
    const limit = 100; // 100 requisições
    const windowMs = 15 * 60 * 1000;

    if (!ip) {
      throw new HttpException('IP não identificado', HttpStatus.BAD_REQUEST);
    }

    const userRequests = this.requests.get(ip);

    if (!userRequests || now > userRequests.resetTime) {
      this.requests.set(ip, { count: 1, resetTime: now + windowMs });
    } else if (userRequests.count >= limit) {
      throw new HttpException('Muitas requisições', HttpStatus.TOO_MANY_REQUESTS);
    } else {
      userRequests.count++;
    }

    next();
  }
}