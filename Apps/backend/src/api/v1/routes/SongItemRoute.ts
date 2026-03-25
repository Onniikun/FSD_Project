import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { SongItemSchema } from "../validations/SongItemValidation"
import * as songItem from "../controllers/SongItemController"

const router: Router = express.Router();

/**
 * List of Song Item Routers.
 */
router.get("/", 
    songItem.getAllSongItems)

router.get("/:id", 
    songItem.getSongItemId)

router.post("/", 
    validateRequest(SongItemSchema),
    songItem.createSongItem)

router.put("/:id", 
    validateRequest(SongItemSchema),
    songItem.updateSongItem)

router.delete("/:id", 
    songItem.deleteSongItems)

export default router;