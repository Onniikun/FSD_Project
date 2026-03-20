export interface SongItemSchema {
    id: number;
    title: string;
    artist: string[];
    release_date: Date;
    genre: string[];
    runtime: string;
    cover: string;
    links?: songLinks;
}

export interface songLinks {
    spotify?: string;
    apple?: string;
    soundcloud?: string;
    amazon?: string;
    youtube?: string;

}