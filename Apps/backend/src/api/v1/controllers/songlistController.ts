import { Request, Response, NextFunction } from "express";
import { Songlist } from "../../../../generated/prisma/client";
import * as songlistService from "../services/songlistService";
import { successResponse } from "../models/responseModel";
import { HTTP_STATUS } from "../constants/httpConstant";

/**
 * Manages requests and responses to retrieve all Songlists.
 * @param req - The express Request
 * @param res - The express Response
 */
export const getAllSonglists = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    console.log("Controller reached for songlists");
    try {
        const songlists = await songlistService.fetchAllSonglists();
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

        const songlist: Songlist | null =
            await songlistService.getSonglistById(id);

        if (songlist) {
            res.json(successResponse(songlist, `Songlist ${id} retrieved successfully`));
        } else {
            throw new Error("Songlist not found");
        }
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
        const newSonglist = await songlistService.createSonglist(req.body);
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