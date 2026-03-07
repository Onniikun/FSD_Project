import { songs } from "./SongItemData";
import type { Song } from "../types/songModel";

/**
 * Resolves an array of Song IDs into full Song objects.
 *
 * This function takes the representation of a song list
 * (which stores only numeric IDs) and returns the
 * corresponding Song objects from the mock song database.
 *
 * Missing or deleted songs are silently ignored, ensuring the UI
 * always receives a clean, fully usable list of Song objects.
 *
 * @param songIds - Array of Song IDs to resolve into Song objects
 * @returns An array of Song objects that correspond to the provided song IDs, excluding any missing songs.
 */
export function resolveSongs(songIds: number[]): Song[] {
    return songs.filter(song => songIds.includes(song.id));
}