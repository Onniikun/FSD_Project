import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import { songlistSchema, songlistUpdateSchema } from "../validations/songlistValidation";
import * as songlistController from "../controllers/songlistController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

router.get(
    "/songlists",
    findOrCreateUser,
    songlistController.getAllSonglists
);

router.get(
    "/songlists/:id",
    findOrCreateUser,
    songlistController.getSonglistById
);

router.post(
    "/songlists",
    requireAuth(), 
    findOrCreateUser,
    validateRequest(songlistSchema), 
    songlistController.createSonglist
);

router.put(
    "/songlists/:id",
    requireAuth(), 
    findOrCreateUser, 
    validateRequest(songlistUpdateSchema),
    songlistController.updateSonglist
);

router.delete(
    "/songlists/:id", 
    requireAuth(), 
    findOrCreateUser,
    songlistController.deleteSonglist
);

router.post(
    "/songlists/:id/toggle/:songId",
    requireAuth(), 
    findOrCreateUser,
    songlistController.toggleSongInList
);

export default router;