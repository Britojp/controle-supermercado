import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus, Logger } from '@nestjs/common';
import { Response } from 'express';
import { AppError } from '../errors/base.error';

@Catch()
export class AppExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AppExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    this.logger.error(
      `Erro na requisição ${request.method} ${request.url}`,
      exception instanceof Error ? exception.stack : exception
    );

    if (exception instanceof AppError) {
      return response.status(exception.statusCode).json({
        statusCode: exception.statusCode,
        message: exception.message,
        context: exception.context,
        code: exception.code,
        details: exception.details,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }


    if (exception instanceof Error && 'status' in exception) {
      const status = (exception as any).status || HttpStatus.INTERNAL_SERVER_ERROR;
      return response.status(status).json({
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }


    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'Erro interno do servidor',
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}