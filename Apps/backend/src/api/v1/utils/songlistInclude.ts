export const songlistInclude = {
    songs: {
        include: {
            song: {
                include: {
                    artists: { include: { artist: true } },
                    genres: { include: { genre: true } },
                    links: true
                }
            }
        }
    }
};