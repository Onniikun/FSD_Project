import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../response/models";

interface ExtendedError extends Error {
    code?: string;
    statusCode?: number;
}

/**
 * Global Express error‑handling middleware.
 *
 * Logs the error and returns a standardized JSON response using the
 * provided statusCode or a 500 fallback.
 *
 * @param err - The error thrown or passed to next()
 * @param _req - The incoming Express request (unused)
 * @param res - The Express response used to send the error payload
 * @param _next - The next middleware function (unused, required by Express)
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
