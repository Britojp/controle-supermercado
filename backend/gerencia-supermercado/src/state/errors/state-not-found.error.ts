import { EntityNotFoundError } from "src/common/errors";

export class StateNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Estado', identifier, context);
  }
}