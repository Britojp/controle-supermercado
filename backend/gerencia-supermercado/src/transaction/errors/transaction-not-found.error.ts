import { EntityNotFoundError } from "src/common/errors";

export class TransactionNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Transação', identifier, context);
  }
}