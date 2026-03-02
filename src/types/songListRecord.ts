/**
 * Represents a record of a song list
 * @param id - The unique identifier of the song list
 * @param name - The name of the song list
 * @param visibility - The visibility of the song list, either "public" or "private"
 * @param description - A description of the song list
 * @param songIds - An array of song IDs that are included in the song list; used for database-friendly storage
 */
export interface SongListRecord {
    id: string;
    name: string;
    visibility: "public" | "private";
    description: string;
    songIds: number[];
    cover?: string;
}