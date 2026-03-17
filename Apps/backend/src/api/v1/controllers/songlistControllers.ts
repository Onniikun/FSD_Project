import { Request, Response, NextFunction } from "express";
import { Songlist } from "@prisma/client";
import * as songlistService from "../services/songlistService";
import { successResponse } from "../models/responseModel";

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
    try {
        const songlists = await songlistService.fetchAllSonglists();
        res.status(200).json(
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
        const songlist: Songlist | null =
            await songlistService.getSonglistById(Number.parseInt(req.params.id));

        if (songlist) {
            res.json(successResponse(songlist, "Songlist retrieved successfully"));
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
        res.status(201).json(
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
        const updatedSonglist = await songlistService.updateSonglist(
            Number.parseInt(req.params.id),
            req.body
        );
        res.status(200).json(
            successResponse(updatedSonglist, "Songlist updated successfully")
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
        await songlistService.deleteSonglist(Number.parseInt(req.params.id));
        res.status(200).json(
            successResponse(null, "Songlist deleted successfully")
        );
    } catch (error) {
        next(error);
    }
};