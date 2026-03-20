import { Request, Response, NextFunction } from "express";

export type MiddlewareFunction = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;

/**
 * A request body with object key string.
 */
export type RequestBody = Record<string, unknown>;

/**
 * A request data HTTP body thats uses the request body.
 */
export type RequestData<T extends RequestBody = RequestBody> = {
    body: T,
    params: Record<string, string>;
    query: Record<string, string | string[]>;
}