import type { SongItemSchema } from "../../../backend/shared/types/SongItemSchema"

/**
 * Service Definition to filter songs by genre.
 * @param songs - The array of songs to filter.
 * @param genre - The selected genre.
 * @returns - A filtered array of songs based on the selected genre
 */
export function filterSongGenre(songs: SongItemSchema[], genre: string): SongItemSchema[] {
    if(genre === "All") {
        return songs
    }
    return songs.filter(song => 
        song.genre.some(g => g.toLowerCase()=== genre.toLowerCase()))
}

/**
 * Service Definition to filter songs by their available platform link.
 * @param songs - The array of songs to filter.
 * @param selectedLinks - The selected platform.
 * @returns - A filtered array of songs based on the selected link.
 */
export function filterSongLinks(songs: SongItemSchema[], selectedLinks: string[]): SongItemSchema[] {
    if(!selectedLinks.length) {
        return songs
    }
    const normalizedCap = selectedLinks.map(g => g.toLocaleLowerCase())

    return songs.filter(songs => (songs.links ?? []).some(link => 
        normalizedCap.includes(link.platform.toLowerCase())))
}

