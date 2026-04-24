export const songlistInclude = {
  id: true,
  name: true,
  description: true,
  visibility: true,
  cover: true,
  userId: true,

  songs: {
    select: {
      song: {
        select: {
          id: true,
          title: true,
          artists: {
            select: {
              artist: true
            }
          },
          genres: {
            select: {
              genre: true
            }
          },
          links: true
        }
      }
    }
  }
};
