import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import { songlistSchema, songlistUpdateSchema } from "../validations/songlistValidation";
import * as songlistController from "../controllers/songlistController";

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
    validateRequest(songlistSchema), 
    songlistController.createSonglist
);

router.put(
    "/songlists/:id", 
    validateRequest(songlistUpdateSchema),
    songlistController.updateSonglist
);

router.delete(
    "/songlists/:id", 
    songlistController.deleteSonglist
);

export default router;