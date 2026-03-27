import { Songlist } from "../../../../generated/prisma/client";
import { prisma } from "../../../../lib/prisma";
import type { FullSonglist } from "../../../../../../shared/types/songListTypes";

/**
 * Retrieves all songlists
 * @returns Array of all songlists
 */
export const fetchAllSonglists = async (): Promise<Songlist[]> => {
    // get all records in the songlist table
    return await prisma.songlist.findMany();
};

/**
 * Gets songlist by ID
 * @param id - The ID of the songlist to get
 * @returns The songlist object for the specified ID
 * @throws Error if songlist with given ID is not found
 */
export const getSonglistById = async (
    id: string
): Promise<FullSonglist | null> => {
    try {
        const songlist = await prisma.songlist.findUnique({
            where: { id },
            include: {
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
            }
        });

        if (!songlist) return null;

        return {
            ...songlist,
            songs: songlist.songs.map(sc => ({
                id: sc.song.id,
                title: sc.song.title,
                artist: sc.song.artists.map(a => a.artist.name),
                releaseDate: sc.song.releaseDate ?? new Date(0),
                genre: sc.song.genres.map(g => g.genre.name),
                runtime: sc.song.runtime ?? "",
                cover: sc.song.cover ?? "",
                links: sc.song.links.map(l => ({
                    id: l.id,
                    songItemId: l.songItemId,
                    platform: l.platform,
                    url: l.url
                }))
            }))
        };
    } catch (error) {
        throw new Error(`Failed to fetch songlist with id ${id}`);
    }
};

/**
 * Adds a new songlist
 * @param songlistData - The data for the new songlist except the id
 * @returns The newly created songlist with unique ID
 */
export const createSonglist = async (
    songlistData: {
        name: string
        description?: string
        cover?: string
        visibility?: string
    }
): Promise<Songlist> => {
  const newSonglist = await prisma.songlist.create({
    data: {
      name: songlistData.name,
      description: songlistData.description ?? null,
      cover: songlistData.cover ?? null,
      visibility: songlistData.visibility ?? "private"
    }
  });

  return newSonglist;
};


/**
 * Updates an existing songlist's information
 * @param id - The ID of the songlist to update
 * @param songlistData - Partial songlist data containing fields to update
 * @returns The updated songlist
 */
export const updateSonglist = async (
    id: string,
    songlist: { 
        name: string; 
        description?: string; 
        cover?: string; 
        visibility?: string 
    }
): Promise<Songlist> => {
    const updatedSonglist = await prisma.songlist.update({
        where: {
            id
        },
        data: {
            ...songlist
        }
    });

    return updatedSonglist;
};

/**
 * Removes an songlist from the songlist records
 * @param id - The ID of the songlist to delete
 */
export const deleteSonglist = async (
    id: string
): Promise<void> => {
    await prisma.songlist.delete({
        where: {
            id
        }
    });
};