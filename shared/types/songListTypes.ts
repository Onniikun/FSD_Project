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

export interface FullSonglist {
  id: string;
  name: string;
  description: string | null;
  visibility: string;
  cover: string | null;
  songs: SongItemSchema[];
}

export interface UpdateSongListData {
  name?: string;
  visibility?: VisibilityOption;
  description?: string | null;
  songIds?: number[];
  cover?: string | null;
}