import { AppError } from './base.error';

// Erro para operações que violam regras de negócio
export class BusinessRuleViolationError extends AppError {
  constructor(rule: string, details?: string, context?: string) {
    super(
      `Regra de negócio violada: ${rule}${details ? ` - ${details}` : ''}`,
      422,
      context
    );
    this.name = 'BusinessRuleViolationError';
  }
}

// Erro para dados inválidos específicos do domínio
export class DomainValidationError extends AppError {
  constructor(field: string, value: any, constraint: string, context?: string) {
    super(
      `Valor inválido para ${field}: '${value}' - ${constraint}`,
      400,
      context
    );
    this.name = 'DomainValidationError';
  }
}

// Erro para recursos em uso
export class ResourceInUseError extends AppError {
  constructor(resource: string, operation: string, context?: string) {
    super(
      `${resource} está em uso e não pode ser ${operation}`,
      409,
      context
    );
    this.name = 'ResourceInUseError';
  }
}

// Erro para permissões insuficientes
export class InsufficientPermissionError extends AppError {
  constructor(operation: string, requiredPermission: string, context?: string) {
    super(
      `Permissão insuficiente para ${operation}. Necessário: ${requiredPermission}`,
      403,
      context
    );
    this.name = 'InsufficientPermissionError';
  }
} 