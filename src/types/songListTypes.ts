import type { Song } from "./songModel";

export type VisibilityOption = "private" | "public";

export interface SongList {
  id: string;
  name: string;
  visibility: VisibilityOption;
  description: string;
  songs: Song[];
  cover?: string;
}

export interface CreateSongListData {
  name: string;
  visibility: VisibilityOption;
  description: string;
  songIds: number[];
  cover?: string;
}