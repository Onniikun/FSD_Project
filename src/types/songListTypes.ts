export type VisibilityOption = "private" | "public";

export interface Song {
  id: string;
  title: string;
  artist: string;
  album?: string;
  releasedDate?: string;
  runtime?: string;
}

export interface SongList {
  id: string;
  name: string;
  visibility: VisibilityOption;
  description: string;
  songs: Song[];
}