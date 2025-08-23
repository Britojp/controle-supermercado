import { EntityNotFoundError } from "src/common/errors";

export class BatchNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Lote', identifier, context);
  }
}