import type { VisibilityOption } from "../types/songListTypes"
import type { Song } from "../types/songModel.ts"

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
 * Validates the list creation input.
 * Checks that the list has a name and at least one song.
 * @param input - A song list input for validation.
 * @returns A list object containing validation errors.
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
 * Add song to a list and checking if it already exists.
 * @param songs - The Current song list.
 * @param newSong - New song to add.
 * @returns - An array containing the update list.
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
    return [...songs, newSong];
}
/**
 * Removes a song from a list by its ID number.
 * @param songId - The ID of the song to remove.
 * @param songs - Current list of songs.
 * @returns - An array containing the update list.
 */
export function removeSong(songId: number, songs: Song[]): Song[] {
    return songs.filter((song) => song.id !== songId)
}
