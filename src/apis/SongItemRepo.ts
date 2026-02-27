import type { Song } from "../types/songModel.ts"
import { songs } from "../apis/SongItemData.ts"

/**
 * Retrieves all songs.
 * @returns - all songs.
 */
export function fetchAllSongs(): Song[] {
    return songs;
};

/**
 * Retrieves song based on ID number.
 * @param id - Song ID number.
 * @returns Song Item.
 */
export function fetchSongById(songId: number): Song {
    const getSongId = songs.find(t => t.id === songId);

    if(!getSongId) {
        throw new Error(`Cannot find song with id number ${songId}`);
    }

    return getSongId;
};

/**
 * Updates an existing song item.
 * @param updateSongItem - Updated song item data.
 * @returns - The new updated Song Item.
 */
export async function updateSongItem(updateSongItem: Song): Promise<Song> {
    const songItem = songs.findIndex(t => t.id === updateSongItem.id)

    if(songItem === -1) {
        throw new Error(`Failed to update song item ${updateSongItem.id}`)
    }
    songs[songItem] = updateSongItem;
    return songs[songItem];
};
/**
 * Deletes song item.
 * @param songId - Song Item ID.
 */
export async function deleteSongItem(songId: number) {
    const deleteSong = songs.findIndex(t => t.id === songId)

    if(deleteSong === -1) {
        throw new Error(`Failed to delete Song Item ${songId}`)
    } else 

    songs.splice(deleteSong, 1)
}