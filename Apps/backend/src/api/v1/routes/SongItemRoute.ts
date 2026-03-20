import express, {Router} from "express";
import * as songItem from "../controllers/SongItemController"


const router: Router = express();

router.get("/songs", songItem.getAllSongItems)
router.get("/songs/:id", songItem.getSongItemId)
router.post("/songs", songItem.createSongItem)
router.put("/songs/:id", songItem.updateSongItem)
router.delete("/songs/:id", songItem.deleteSongItems)