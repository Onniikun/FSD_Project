import type { Song, VisibilityOption } from "../../types/songListTypes"

export interface CreateSongListInput  {
    id: string;
  name: string;
  visibility: VisibilityOption;
  description: string;
  songs: Song[];
}
export interface ValidateSongErrors {
  name?: string;
  songs?: string;
}
/**
 * Validate list name and creation.
 * @param input - List name and Songs.
 * @returns A valid list.
 */
export function validateList(input: CreateSongListInput): ValidateSongErrors {

    const newErrors: ValidateSongErrors = {};

    if (input.name.trim() === "") {
      newErrors.name = "**List name is required.**";
    }

    if (input.songs.length === 0) {
      newErrors.songs = "**Please add at least one song.**";
    }

    return newErrors;
}
/**
 * 
 * @param songs 
 * @param newSong 
 * @returns 
 */
export function addSong(songs: Song[], newSong: Song): Song[] {
    const existList = songs.some(
        (song) => song.title === newSong.title && 
        song.artist === newSong.artist
    );
    //Check for already existing songList
    if (existList) {
        return songs;
    }
    return  [...songs, newSong];
}
/**
 * 
 * @param songId 
 * @param songs 
 * @returns 
 */
export function removeSong(songId: string, songs: Song[]): Song[] {
    return songs.filter((song) => song.id !== songId)
}
