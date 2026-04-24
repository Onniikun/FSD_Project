import { Request, Response, NextFunction } from "express";

/**
 * Standard Express middleware function type using (req, res, next).
 */
export type MiddlewareFunction = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;

/**
 * Generic request body type where keys are strings and values are unknown.
 */
export type RequestBody = Record<string, unknown>;

/**
 * Typed structure for incoming request data, including body, params, and query.
 */
export type RequestData<T extends RequestBody = RequestBody> = {
    body: T,
    params: Record<string, string>;
    query: Record<string, string | string[]>;
}

/**
 * Extending Express Request interface to include optional userId property for authentication purposes.
 */
declare global{
    namespace Express {
        export interface Request {
            userId?: string|null;
        }
    }
}