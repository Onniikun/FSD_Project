import type { Song } from "./songModel";

export type VisibilityOption = "private" | "public";

export interface SongList {
  id: string;
  name: string;
  visibility: VisibilityOption;
  description: string;
  songs: Song[];
}