export class AppError extends Error {
  public readonly statusCode: number;
  public readonly context?: string;
  public readonly code?: string;
  public readonly details?: any;

  constructor(
    message: string, 
    statusCode = 500, 
    context?: string,
    code?: string,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.context = context;
    this.code = code;
    this.details = details;
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}