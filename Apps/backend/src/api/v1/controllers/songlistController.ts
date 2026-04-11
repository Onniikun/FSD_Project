import { Request, Response, NextFunction } from "express";
import * as songlistService from "../services/songlistService";
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../constants/httpConstant";

/**
 * Manages requests and responses to retrieve all Songlists.
 * @param req - The express Request
 * @param res - The express Response
 */
export const getAllSonglists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userId = req.userId ?? null;

        const songlists = await songlistService.fetchAllSonglists(userId);
        res.status(HTTP_STATUS.OK).json(
            successResponse(songlists, "Songlists retrieved successfully")
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and responses to retrieve a Songlist by its ID.
 * @param req - The express Request
 * @param res - The express Response
 */
export const getSonglistById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = req.params.id as string;
        const userId = req.userId ?? null;

        const songlist = await songlistService.getSonglistById(id);

        if (!songlist) {
            res.status(404).json({ message: "Songlist not found" });
            return;
        }

        // Enforce visibility
        if (songlist.visibility === "private" && songlist.userId !== userId) {
            res.status(403).json({ message: "Not authorized" });
            return;
        }

        res.json(successResponse(songlist, `Songlist ${id} retrieved successfully`));
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and responses to create a new Songlist.
 * @param req - The express Request
 * @param res - The express Response
 */
export const createSonglist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userId = req.userId;

        if (!userId) {
            res.status(401).json({ message: "Unauthorized" });
            return;
        }

        const newSonglist = await songlistService.createSonglist({
            ...req.body,
            userId
        });

        res.status(HTTP_STATUS.CREATED).json(
            successResponse(newSonglist, "Songlist created successfully")
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and responses to update a Songlist.
 * @param req - The express Request
 * @param res - The express Response
 */
export const updateSonglist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = req.params.id as string;

        await songlistService.verifySonglistOwnership(id, req.userId ?? null);

        const updatedSonglist = await songlistService.updateSonglist(
            id,
            req.body
        );
        res.status(HTTP_STATUS.OK).json(
            successResponse(updatedSonglist, `Songlist ${id} updated successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Manages requests and responses to delete a Songlist.
 * @param req - The express Request
 * @param res - The express Response
 */
export const deleteSonglist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = req.params.id as string;

        await songlistService.verifySonglistOwnership(id, req.userId ?? null);

        await songlistService.deleteSonglist(id);
        res.status(HTTP_STATUS.OK).json(
            successResponse(null, `Songlist ${id} deleted successfully`)
        );
    } catch (error) {
        next(error);
    }
};

/**
 * Manages the request and response of a toggled list.
 * @param req - The express Request
 * @param res - The express Response
 */
export const toggleSongInList = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id, songId } = req.params as { id: string; songId: string };

        await songlistService.verifySonglistOwnership(id, req.userId ?? null);

        const updated = await songlistService.toggleSongInList(
            id,
            Number(songId)
        );

        res.status(HTTP_STATUS.OK).json(
            successResponse(updated, "Song toggled successfully")
        );
    } catch (error) {
        next(error);
    }
};