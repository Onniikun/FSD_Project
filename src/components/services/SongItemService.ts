import type { Song } from "../../types/songModel.ts"

/**
 * Service Definition to filter songs by genre.
 * @param songs - a song item
 * @param genre - song type
 * @returns - A filtered song
 */
export function filterSongGenre(songs: Song[], genre: string): Song[] {
    if(genre === "All") {
        return songs
    }
    return songs.filter(song => 
        song.genre.some(g => g.toLowerCase()=== genre.toLowerCase()))
}