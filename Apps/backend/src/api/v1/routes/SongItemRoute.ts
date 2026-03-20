import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { SongItemSchema } from "../validations/SongItemValidation"
import * as songItem from "../controllers/SongItemController"

const router: Router = express();

/**
 * List of Song Item Routers.
 */
router.get("/songs", 
    songItem.getAllSongItems)

router.get("/songs/:id", 
    songItem.getSongItemId)

router.post("/songs", 
    validateRequest(SongItemSchema),
    songItem.createSongItem)

router.put("/songs/:id", 
    validateRequest(SongItemSchema),
    songItem.updateSongItem)

router.delete("/songs/:id", 
    songItem.deleteSongItems)