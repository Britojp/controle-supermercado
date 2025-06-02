import { PartialType } from "@nestjs/mapped-types";
import {CreateTransactionDTO } from "./create-transaction.dto";

export class updateUserDTO extends PartialType(CreateTransactionDTO) {}