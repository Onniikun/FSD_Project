import { Request, Response, NextFunction } from "express";
import { successResponse, errorResponse } from "../response/models";
import * as SongItemService from "../services/SongItemService";
import { HTTP_STATUS } from "../constants/httpConstant";

/**
 * A controller method that handles the request from the getAllSongItems.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllSongItems = async(
   req: Request,
   res: Response,
   Next: NextFunction 
): Promise<void> => {
    try {
        const songItem = await SongItemService.getAllSongItems();
        res.status(HTTP_STATUS.OK).json(
            successResponse(songItem, "All song items returned successfully.")
        );
    } catch (error: any) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            errorResponse("Couldn't retrieved any song items.")
        )
    }
}
/**
 * A controller method that handles the request from the getSongItemId.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const getSongItemId = async(
   req: Request,
   res: Response,
   Next: NextFunction 
): Promise<void> => {
    try {
        const songitemID = typeof req.params.id === "string"
            ? Number.parseInt(req.params.id)
            : Number.parseInt(req.params.id[0])
        const songItem = await SongItemService.getSongItemId(songitemID)
        res.status(HTTP_STATUS.OK).json(
            successResponse(songItem, `Retrieved song item id${songitemID}`)
        )
    } catch (error: any) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
            errorResponse("Couldn't retrieved any song items.")
        )
    }
}


export const updateSongItems = async(
   req: Request,
   res: Response,
   Next: NextFunction 
): Promise<void> => {
    
}

export const deleteSongItems = async(
   req: Request,
   res: Response,
   Next: NextFunction 
): Promise<void> => {
    
}

