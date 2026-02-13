import { SongRepository } from "../repositories/SongRepository";
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
        const allSongs = SongRepository.getAllSongs();

        if(!searchValue.trim()) return allSongs;

        const normalized = searchValue.toLowerCase();

        const results = allSongs.filter((song) => {
            return (
                song.title.toLowerCase().includes(normalized) ||
                song.artist.toLowerCase().includes(normalized) ||
                song.genre.toLowerCase().includes(normalized)
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

        return SongRepository.getAllSongs()
            .filter((song) =>
                song.title.toLowerCase().startsWith(normalized)
            )
            .slice(0, 5);
    },
};