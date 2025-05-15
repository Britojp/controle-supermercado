import { Request } from "express";
import { User } from "src/database/entities/user.entity";

export interface AuthRequest extends Request {
    user: User;
}