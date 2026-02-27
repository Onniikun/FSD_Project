import type { Song } from "../../types/songModel.ts"

/**
 * Service Definition to filter songs by genre.
 * @param songs - The array datalist of songs to filter.
 * @param genre - The selected genre.
 * @returns - A filtered array of songs based on the selected genre
 */
export function filterSongGenre(songs: Song[], genre: string): Song[] {
    if(genre === "All") {
        return songs
    }
    return songs.filter(song => song.genre === genre)
}