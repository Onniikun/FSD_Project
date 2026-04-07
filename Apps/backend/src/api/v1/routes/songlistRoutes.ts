import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import { songlistSchema, songlistUpdateSchema } from "../validations/songlistValidation";
import * as songlistController from "../controllers/songlistController";
import { requireAuth } from "@clerk/express";

const router: Router = express.Router();

router.get(
    "/songlists",
    songlistController.getAllSonglists
);

router.get(
    "/songlists/:id",
    songlistController.getSonglistById
);

router.post(
    "/songlists",
    requireAuth(),
    validateRequest(songlistSchema), 
    songlistController.createSonglist
);

router.put(
    "/songlists/:id",
    requireAuth(), 
    validateRequest(songlistUpdateSchema),
    songlistController.updateSonglist
);

router.delete(
    "/songlists/:id", 
    requireAuth(),
    songlistController.deleteSonglist
);

router.post(
    "/songlists/:id/toggle/:songId",
    requireAuth(),
    songlistController.toggleSongInList
);

export default router;