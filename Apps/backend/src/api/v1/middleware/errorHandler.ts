import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../response/models";

interface ExtendedError extends Error {
    code?: string;
    statusCode?: number;
}
/**
 * A global error middleware handler. 
 * Returns a logged JSON error message with custom error messages.
 * 
 * @param err - The error object message.
 * @param _req - (Unused) The express Request.
 * @param res - The express Response.
 * @param _next - (Unused) The express middleware chaining function.
 */
export const errorHandler = (
    err: ExtendedError,
    _req: Request,
    res: Response,
    _next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;
    const code = err.code || "UNKNOWN_ERROR";

    console.error(`Error: ${err.message} (Code: ${code})`);

    res.status(statusCode).json(
        errorResponse(`An unexpected error occurred: ${code}`)
    );
};