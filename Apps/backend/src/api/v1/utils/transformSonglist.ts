import type { FullSonglist } from "../../../../../../shared/types/songListTypes";

export const transformSonglist = (songlist: any): FullSonglist => {
    return {
        id: songlist.id,
        name: songlist.name,
        description: songlist.description,
        visibility: songlist.visibility,
        cover: songlist.cover,
        userId: songlist.userId,
        songs: songlist.songs.map((sc: any) => ({
            id: sc.song.id,
            title: sc.song.title,
            artist: sc.song.artists.map((a: any) => a.artist.name),
            releaseDate: sc.song.releaseDate ?? new Date(0),
            genre: sc.song.genres.map((g: any) => g.genre.name),
            runtime: sc.song.runtime ?? "",
            cover: sc.song.cover ?? "",
            links: sc.song.links.map((l: any) => ({
                id: l.id,
                songItemId: l.songItemId,
                platform: l.platform,
                url: l.url
            }))
        }))
    };
};