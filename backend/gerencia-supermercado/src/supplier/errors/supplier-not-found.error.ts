import { EntityNotFoundError } from "src/common/errors";

export class SupplierNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Fornecedor', identifier, context);
  }
}