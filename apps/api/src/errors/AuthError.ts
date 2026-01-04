import { AppError } from "./AppError";

export class AuthError extends AppError {
  constructor(message = "Not authorized") {
    super(message, 401);
  }
}
