import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { MiddlewareFunction } from "../types/express";

/**
 * Runs Joi validation against the provided data.
 */
export const validate = <T>(schema: ObjectSchema<T>, data: T): void => {
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
        throw new Error(
            `Validation error: ${error.details.map(d => d.message).join(", ")}`
        );
    }
};

/**
 * Middleware that validates req.body using the provided Joi schema.
 */
export const validateRequest = (schema: ObjectSchema): MiddlewareFunction => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            validate(schema, req.body);
            next();
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    };
};