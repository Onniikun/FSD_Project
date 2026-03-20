import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
import { HTTP_STATUS } from "../constants/httpConstant"
import { MiddlewareFunction, RequestData } from "../types/express";

/**
 * A validation schema designed to validate a data schema.
 * @param schema - A data's Joi schema.
 * @param data - The data passing through the function for validation.
 */
export const validate = <T>(schema: ObjectSchema<T>, data:T): void => {
    const { error } = schema.validate(data, {abortEarly: false});

    if(error) {
        throw new Error(
            `Validation error: ${
                error.details.map(n => n.message).join(", ")
            }`
        );
    }
};

/**
 * A validcation request schema for request data to be validated.
 * @param schema - A data's schema
 * @returns - Express middleware validation.
 */
export const validateRequest = (schema: ObjectSchema): MiddlewareFunction => {
    return(req: Request, res: Response, next: NextFunction) => {
        try {
            const data: RequestData = {
                ...req.body,
                ...req.params,
                ...req.query
            };
            validate(schema, data);
            // invoke next middleware if no error is caught
            next();
        } catch(error) {
            res.status(HTTP_STATUS.BAD_REQUEST).json({error: (error as Error).message});
        } 
    };
};