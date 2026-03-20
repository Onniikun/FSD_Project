import { Songlist } from "@prisma/client";
import { prisma } from "../../../../lib/prisma";

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
): Promise<Songlist | null> => {
    try {
        const songlist = await prisma.songlist.findUnique({
            where: {
                id
            }
        });

        if (!songlist) {
            return null;
        } else {
            return songlist;
        }
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