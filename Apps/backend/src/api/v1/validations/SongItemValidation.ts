import Joi, { ObjectSchema } from "joi";

/**
 * Song Item schema for validation.
 * 
 * When artists or users create a Song Item they must
 * apply a title, artist's name, genre. runtime and platform link.
 * 
 * Parameters like cover, and release date are optional since there 
 * might not be a cover for the song item and release date if the date is unknown(lost media)
 * 
 * 
 * Reference for array schema: https://joi.dev/api/?v=17.13.3
 */
export const SongItemSchema: ObjectSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": "Title is required",
        "string.empty": "Title cannot be empty"
    }),
    // Since we use an array for storing mulitple artists and genres
    // we use the array Joi schema.
    artists: Joi.array().items(Joi.string().min(1)).min(1).required().messages({
       "array.base": "Artist is required",
       "array.min": "Artist needs atleast one value"
    }),
    genres: Joi.array().items(Joi.string().min(1)).min(1).required().messages({
       "array.base": "Genre is required",
       "array.min": "Genre needs atleast one value"
    }),
    release_date: Joi.date().optional().messages({
        "date.base": "Release date must be valid to actual existence of the item." 
    }),
    runtime: Joi.string().pattern(/^\d{1,2}:\d{2}$/).required().messages({
        "any.required": "Runtime is required",
        "string.pattern.based": "Runtime must be formatted."
    }),
    //Its just a cover no text/schema validation needed.
    cover: Joi.string().optional(),

    links: Joi.array().items(Joi.object({
        platform: Joi.string().required().messages({
            "any.required": "platform is required",
        }),
        url: Joi.string().required().messages({
            "any.required": "URL must be valid/accessable",
        })
    })).required(),
})