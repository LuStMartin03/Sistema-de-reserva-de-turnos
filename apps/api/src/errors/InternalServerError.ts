import { AppError } from "./AppError";

export class InternalServerError extends AppError {
    constructor(message: string = "Error interno del servidor.") {
        super(message, 500);
    }
}