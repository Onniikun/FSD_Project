import type { SongItemSchema } from "./SongItemSchema";

export type VisibilityOption = "private" | "public";

export interface SongList {
  id: string;
  name: string;
  visibility: VisibilityOption;
  description: string;
  songs: SongItemSchema[];
  cover?: string;
}

export interface CreateSongListData {
  name: string;
  visibility: VisibilityOption;
  description: string;
  songIds: number[];
  cover?: string;
}