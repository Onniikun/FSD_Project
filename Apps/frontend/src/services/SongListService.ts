import type { SongItemSchema } from "../../../../shared/types/SongItemSchema.ts";
import type { VisibilityOption } from "../../../../shared/types/songListTypes.ts";

export interface CreateSongListInput  {
  name: string;
  visibility: VisibilityOption;
  description: string;
  songIds: number[];
  cover?: string;
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

    if (input.songIds.length === 0) {
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
export function addSong(songs: SongItemSchema[], newSong: SongItemSchema): SongItemSchema[] {
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
export function removeSong(songId: number, songs: SongItemSchema[]): SongItemSchema[] {
    return songs.filter((song) => song.id !== songId)
}
