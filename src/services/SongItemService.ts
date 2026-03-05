import type { Song } from "../types/songModel.ts"

/**
 * Service Definition to filter songs by genre.
 * @param songs - The array of songs to filter.
 * @param genre - The selected genre.
 * @returns - A filtered array of songs based on the selected genre
 */
export function filterSongGenre(songs: Song[], genre: string): Song[] {
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
export function filterSongLinks(songs: Song[], selectedLinks: string[]): Song[] {
    if(selectedLinks.length === 0) {
        return songs
    }
    return songs.filter(song => {
        if (!song.links) {
            return false
    }
    
    return selectedLinks.some(platform => 
        !!song.links?.[platform as keyof typeof song.links]
    )
  })
}