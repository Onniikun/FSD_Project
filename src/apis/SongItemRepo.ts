import type { Song } from "../types/songModel.ts"
import { songs } from "../apis/SongItemData.ts"

/**
 * Retrieves all songs.
 * @returns - all songs.
 */
export function fetchAllSongs(): Song[] {
    return songs;
}

/**
 * Retrieves song based on ID number.
 * @param id - Song ID number.
 * @returns Song Item.
 */
export function fetchSongById(id: number): Song {
    const getSongId = songs.find(t => t.id === id);

    if(!getSongId) {
        throw new Error(`Cannot find song with id number ${id}`);
    }

    return getSongId;
}