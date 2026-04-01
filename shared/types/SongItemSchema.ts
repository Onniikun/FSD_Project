export interface SongItemSchema {
    id: number;
    title: string;
    artist: string[];
    releaseDate: Date;
    genre: string[];
    runtime: string;
    cover: string;
    links?: songLinks;
}

export type songLinks = {
  id: number
  songItemId: number
  platform: string
  url: string
}[]