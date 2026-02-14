import type { Song, VisibilityOption } from "../../types/songListTypes"

export interface CreateSongListInput  {
    id: string;
  name: string;
  visibility: VisibilityOption;
  description: string;
  songs: Song[];
}
export interface validateSongErrors {
  name?: string;
  songs?: string;
}
/**
 * 
 * @param input 
 * @returns 
 */
export function validateList(input: CreateSongListInput): validateSongErrors {

    const newErrors: validateSongErrors = {};

    if (input.name.trim() === "") {
      newErrors.name = "**List name is required.**";
    }

    if (input.songs.length === 0) {
      newErrors.songs = "**Please add at least one song.**";
    }

    return newErrors;
}