import { PartialType } from "@nestjs/mapped-types";
import {createTransactionDTO } from "./create-transaction.dto";

export class updateUserDTO extends PartialType(createTransactionDTO) {}