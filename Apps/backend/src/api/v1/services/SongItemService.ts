import { prisma } from "../../../../lib/prisma";
import { SongItem } from "../../../../generated/prisma/client"

/**
 * Retrieves all Song Item from Boombox database.
 * @returns -  All Song Items.
 */
export const getAllsongItems = async () => {
  const songs = await prisma.songItem.findMany({
    orderBy: { title: "asc" },
    include: {
      artists: { include: { artist: true } },
      genres: { include: { genre: true } },
      links: true
    }
  });
 
  return songs.map(song => ({
    id: song.id,
    title: song.title,
    releaseDate: song.releaseDate,
    runtime: song.runtime,
    cover: song.cover,
    artist: song.artists.map(a => a.artist.name),
    genre: song.genres.map(g => g.genre.name),
    links: song.links
  }));
};
/**
 * Retrieves a Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @returns - A specific Song Item.
 */
export const getsongItemId = async (id: number) => {
  const song = await prisma.songItem.findUnique({
    where: { id },
    include: {
      artists: { include: { artist: true } },
      genres: { include: { genre: true } },
      links: true
    }
  });
 
  if (!song) return null;
 
  return {
    id: song.id,
    title: song.title,
    releaseDate: song.releaseDate,
    runtime: song.runtime,
    cover: song.cover,
    artist: song.artists.map(a => a.artist.name),
    genre: song.genres.map(g => g.genre.name),
    links: song.links
  };
}
/**
 * Creates a new Song Item.
 * 
 * - Artists and Genres are pulled from database if they already exist to prevent duplicates
 * - Links are created with different URL platforms links for each Song Item.
 * 
 * @param songItemData - Song Item data.
 * @returns - A new Song Item.
 */
export const createsongItem = async(songItemData: {
    title: string;
    artists: string[];
    genres: string[];
    release_date?: Date;
    runtime?: string;
    cover?: string;
    links?: { platform: string; url: string }[];
}): Promise<SongItem> => {
    const newsongItem: SongItem = await prisma.songItem.create({
        // Data is that part of the main database with single static values.
        data: {
            title: songItemData.title,
            releaseDate: songItemData.release_date
            ? new Date(songItemData.release_date)
            : undefined,
            runtime: songItemData.runtime,
            cover: songItemData.cover,
            // Since artist and genres can belong to many different songItems
            // They have to be sepearted to so that each Song Item ID is different from each other.
            // https://www.prisma.io/docs/orm/reference/prisma-client-reference
            artists: {
                create: songItemData.artists.map((name) =>({
                    artist: {
                        connectOrCreate: {
                            where: { name },
                            create: { name },
                        }
                    }
                }))
            },
            genres: {
                create: songItemData.genres.map((name) =>({
                    genre: {
                        connectOrCreate: {
                            where: { name },
                            create:{ name },
                        }
                    }
                }))
            },
            // Every Song Item has their own list of Links that is available to them.
            links: songItemData.links
                ? {
                    create: songItemData.links.map((link) => ({
                        platform: link.platform,
                        url: link.url
                    }))
                }
            : undefined
        },
    })
    return newsongItem;
}


/**
 * Updates a single Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @param songItem - Song Item data.
 * @returns - An updated Song Item.
 */
export const updatesongItem = async(id: number, 
    songItem: {
        title: string, 
        release_date: Date | string, 
        runtime: string, 
        cover: string, 
    }
): Promise<SongItem>  => {
    const updatedsongItem = await prisma.songItem.update({
        where: {
            id: id
        },
        data: {
            title: songItem.title,
            releaseDate: songItem.release_date
                ? new Date(songItem.release_date) 
                : undefined,
            runtime: songItem.runtime,
            cover: songItem.cover,

        }
    });
    return updatedsongItem
}
/**
 * Deletes a Song Item based on its ID number.
 * @param id - Song Item ID number.
 */
export const deletesongItem = async(id: number): Promise<void> => {
    /**
     * Deletes the joiner tables to full get rid of that Song Item
     * Regardless if they share the same genre, artist or collection.
     */
    await prisma.songArtist.deleteMany({
        where: {
            songItemId: id
        }
    });
    await prisma.songGenre.deleteMany({
        where: {
            songItemId: id
        }
    });
    await prisma.songCollection.deleteMany({
        where: {
            songId: id
        }
    });
    await prisma.link.deleteMany({
        where: {
            songItemId: id
        }
    });
    //Deletes the initial song item data(title, releasedate etc.)
    await prisma.songItem.delete({
        where: {
            id: id
        }
    });
}
