import { Request, Response, NextFunction } from "express";
import { successResponse } from "../response/models";
import * as SongItemService from "../services/SongItemService";
import { HTTP_STATUS } from "../constants/httpConstant";
import { SongItem } from "../../../../generated/prisma/client"

/**
 * A controller method that handles the request from the getAllSongItems function.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const getAllSongItems = async(
   req: Request,
   res: Response,
   next: NextFunction 
): Promise<void> => {
    try {
        const songItem = await SongItemService.getAllsongItems();
        res.status(HTTP_STATUS.OK).json(
            successResponse(songItem, "All song items returned successfully.")
        );
    } catch(error) {
        next(error);
    }
}
/**
 * A controller method that handles the request from the getSongItemId function.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const getSongItemId = async(
   req: Request,
   res: Response,
   next: NextFunction 
): Promise<void> => {
    try {
        // Extracts ID from string array value.
        const id = Array.isArray(req.params.id)
            ? req.params.id[0]
            : req.params.id;
        const songitemID: SongItem | null = await 
            SongItemService.getsongItemId(Number.parseInt(id))

        if (songitemID) {
            res.status(HTTP_STATUS.OK).json(
                successResponse(songitemID, `Retrieved song item id${songitemID.id}`)
            )
        } else {
            throw new Error("Cannot get Song Item.")
        }
    } catch(error) {
        next(error);
    }
}
/**
 * A controller method that handles the request from the createSongItem function.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const createSongItem = async(
    req: Request,
    res: Response,
    next: NextFunction 
): Promise<void> => {
    try {
        const songItem = await SongItemService.createsongItem(req.body)
        res.status(HTTP_STATUS.CREATED).json(
            successResponse(songItem, "New Song Item created.")
        )
    } catch(error) {
        next(error);
    }
};



/**
 * A controller method that handles the request from the updateSongItems function.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const updateSongItem = async(
   req: Request,
   res: Response,
   next: NextFunction 
): Promise<void> => {
    try {
        const songitemID = typeof req.params.id === "string"
        ? Number.parseInt(req.params.id)
        : Number.parseInt(req.params.id[0])
    await SongItemService.updatesongItem(songitemID, req.body)
    res.status(HTTP_STATUS.OK).json(
        successResponse(`Song Item: ${songitemID} has been updated.`)
    )
    } catch(error) {
        next(error);
    }
}
/**
 * A controller method that handles the request from the updateSongItems function.
 * @param req - The express Request
 * @param res - The express Response
 * @param next - The express middleware chaining function
 */
export const deleteSongItems = async(
   req: Request,
   res: Response,
   next: NextFunction 
): Promise<void> => {
    try {
        const songitemID = typeof req.params.id === "string"
            ? Number.parseInt(req.params.id)
            : Number.parseInt(req.params.id[0])
        await SongItemService.deletesongItem(songitemID)
        res.status(HTTP_STATUS.OK).json(
            successResponse(null, `Song Item: ${songitemID} has be deleted.`)
        )
    } catch(error) {
        next(error);
    }
}

