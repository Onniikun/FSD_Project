import Joi, { ObjectSchema } from "joi";

/**
 * Validation schema for creating a new songlist.
 *
 * Ensures the client provides a valid name and optionally allows
 * description, cover image URL, and visibility mode.
 *
 * - `name` is required and cannot be empty.
 * - `description` and `cover` may be null or empty strings.
 * - `cover` must be a valid URL if provided.
 * - `visibility` must be "public" or "private" (defaults to "private").
 *
 * This schema is used for POST /songlists to validate full object creation.
 */
export const songlistSchema: ObjectSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Name is required",
        "string.empty": "Name cannot be empty"
    }),
    description: Joi.string().allow(null, "").optional(),
    cover: Joi.string().uri().allow(null, "").optional().messages({
        "string.uri": "Cover must be a valid URL"
    }),
    visibility: Joi.string()
        .valid("public", "private")
        .default("private")
        .messages({
            "any.only": "Visibility must be either 'public' or 'private'"
        }),
    songIds: Joi.array().items(Joi.number()).optional(),    
});

/**
 * Validation schema for updating an existing songlist.
 *
 * All fields are optional, allowing clients to send only the fields
 * they intend to modify. Each field is validated if present.
 *
 * - `name` cannot be empty if provided.
 * - `description` and `cover` may be null or empty strings.
 * - `cover` must be a valid URL if provided.
 * - `visibility` must be "public" or "private" if included.
 *
 * This schema is used for PUT /songlists/:id to validate partial updates.
 */
export const songlistUpdateSchema: ObjectSchema = Joi.object({
    name: Joi.string().optional().messages({
        "string.empty": "Name cannot be empty"
    }),
    description: Joi.string().allow(null, "").optional(),
    cover: Joi.string().uri().allow(null, "").optional().messages({
        "string.uri": "Cover must be a valid URL"
    }),
    visibility: Joi.string()
        .valid("public", "private")
        .optional()
        .messages({
            "any.only": "Visibility must be either 'public' or 'private'"
        }),
    songIds: Joi.array().items(Joi.number()).optional(),
}).unknown(true);