import { AppError } from './base.error';

// Erro base para entidades não encontradas
export class EntityNotFoundError extends AppError {
  constructor(entityName: string, identifier: string | number, context?: string) {
    super(
      `${entityName} com identificador '${identifier}' não foi encontrado`,
      404,
      context
    );
    this.name = `${entityName}NotFoundError`;
  }
}

// Erro base para falha na criação de entidades
export class EntityCreationError extends AppError {
  constructor(entityName: string, reason?: string, context?: string) {
    const message = reason 
      ? `Falha ao criar ${entityName}: ${reason}`
      : `Falha ao criar ${entityName}`;
    
    super(message, 400, context);
    this.name = `${entityName}CreationError`;
  }
}

// Erro base para falha na atualização de entidades
export class EntityUpdateError extends AppError {
  constructor(entityName: string, identifier: string | number, reason?: string, context?: string) {
    const message = reason 
      ? `Falha ao atualizar ${entityName} '${identifier}': ${reason}`
      : `Falha ao atualizar ${entityName} '${identifier}'`;
    
    super(message, 400, context);
    this.name = `${entityName}UpdateError`;
  }
}

// Erro base para falha na exclusão de entidades
export class EntityDeletionError extends AppError {
  constructor(entityName: string, identifier: string | number, reason?: string, context?: string) {
    const message = reason 
      ? `Falha ao excluir ${entityName} '${identifier}': ${reason}`
      : `Falha ao excluir ${entityName} '${identifier}'`;
    
    super(message, 400, context);
    this.name = `${entityName}DeletionError`;
  }
}

// Erro base para entidades duplicadas
export class EntityDuplicateError extends AppError {
  constructor(entityName: string, field: string, value: string, context?: string) {
    super(
      `${entityName} com ${field} '${value}' já existe`,
      409,
      context
    );
    this.name = `${entityName}DuplicateError`;
  }
}

// Erro base para operações não permitidas
export class EntityOperationError extends AppError {
  constructor(entityName: string, operation: string, reason: string, context?: string) {
    super(
      `Operação '${operation}' não permitida para ${entityName}: ${reason}`,
      403,
      context
    );
    this.name = `${entityName}OperationError`;
  }
} 