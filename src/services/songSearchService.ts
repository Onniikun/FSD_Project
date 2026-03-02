import { fetchAllSongs } from "../apis/SongItemRepo"; 
import type { Song } from "../types/songModel";

/**
 * Responsibilities:
 * - Normalize search queries
 * - Apply fuzzy matching
 * - Rank results
 * - Provide suggestions for autocomplete
 */
export const SearchService = {
    searchSongs(searchValue: string): Song[] {
        const allSongs = fetchAllSongs();

        if(!searchValue.trim()) return allSongs;

        const normalized = searchValue.toLowerCase();

        const results = allSongs.filter((song) => {
            const title = song.title.toLowerCase();
            const artist = song.artist.join(" ").toLowerCase();
            const genre = song.genre.join(" ").toLowerCase();

            return (
                title.includes(normalized) ||
                artist.includes(normalized) ||
                genre.includes(normalized)
            );
        });

        return results.sort((songA, songB) => {
            const firstMatch = songA.title.toLowerCase().startsWith(normalized);
            const secondMatch = songB.title.toLowerCase().startsWith(normalized);

            if(firstMatch && !secondMatch) return -1;
            if(!firstMatch && secondMatch) return 1;
            return 0;
        });
    },

    getSuggestions(searchValue: string): Song[] {
        if(!searchValue.trim()) return [];

        const normalized = searchValue.toLowerCase();

        return fetchAllSongs()
            .filter((song) =>
                song.title.toLowerCase().startsWith(normalized)
            )
            .slice(0, 5);
    },
};