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

export interface songLinks {
    spotify?: string;
    apple?: string;
    soundcloud?: string;
    amazon?: string;
    youtube?: string;

}