import { Songlist } from "../../../../generated/prisma/client";
import { prisma } from "../../../../lib/prisma";
import type { 
    FullSonglist, 
    CreateSongListData, 
    UpdateSongListData } from "../../../../shared/types/songListTypes";
import { transformSonglist } from "../utils/transformSonglist";
import { songlistInclude } from "../utils/songlistInclude";


/**
 * Retrieves all songlists
 * @returns Array of all songlists
 */
export const fetchAllSonglists = async (): Promise<FullSonglist[]> => {
    const lists = await prisma.songlist.findMany({
        include: songlistInclude
    });

    return lists.map(transformSonglist);
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
            include: songlistInclude
        });

        if (!songlist) return null;

        return transformSonglist(songlist);
    } catch (error) {
        throw new Error(`Failed to fetch songlist with id ${id}`);
    }
};

/**
 * Adds a new songlist
 * @param CreateSongListData - The data for the new songlist except the id
 * @returns The newly created songlist with unique ID
 */
export const createSonglist = async (
    songlistData: CreateSongListData
) => {
    const { name, description, cover, visibility, songIds } = songlistData;

    const created = await prisma.songlist.create({
        data: {
            name,
            description: description ?? null,
            cover: cover ?? null,
            visibility: visibility ?? "private",
            songs: songIds
                ? {
                    create: songIds.map(id => ({ songId: id }))
                }
                : undefined
        },
        include: songlistInclude
    });

    return transformSonglist(created);
};

/**
 * Updates an existing songlist's information
 * @param id - The ID of the songlist to update
 * @param songlistData - Partial songlist data containing fields to update
 * @returns The updated songlist
 */
export const updateSonglist = async (
    id: string, 
    songlistData: UpdateSongListData
) => {
    const { name, description, cover, visibility, songIds } = songlistData;

    await prisma.songlist.update({
        where: { id },
        data: {
            name,
            description: description ?? null,
            cover: cover ?? null,
            visibility
        }
    });

    if (songIds) {
        await prisma.songCollection.deleteMany({ where: { songlistId: id } });

        await prisma.songCollection.createMany({
            data: songIds.map(songId => ({
                songId,
                songlistId: id
            }))
        });
    }

    const updated = await prisma.songlist.findUnique({
        where: { id },
        include: songlistInclude
    });

    return transformSonglist(updated);
};


/**
 * Removes an songlist from the songlist records
 * @param id - The ID of the songlist to delete
 */
export const deleteSonglist = async (
    id: string
): Promise<void> => {
    await prisma.songCollection.deleteMany({
        where: { songlistId: id }
    });

    await prisma.songlist.delete({
        where: { id }
    });
};

export const toggleSongInList = async (
    listId: string,
    songId: number
) => {
    // Check if the song is already in the list
    const existing = await prisma.songCollection.findUnique({
        where: {
            songId_songlistId: {
                songId,
                songlistId: listId
            }
        }
    });

    if (existing) {
        // Remove it
        await prisma.songCollection.delete({
            where: { id: existing.id }
        });
    } else {
        // Add it
        await prisma.songCollection.create({
            data: {
                songId,
                songlistId: listId
            }
        });
    }

    // Return updated list
    const updated = await prisma.songlist.findUnique({
        where: { id: listId },
        include: songlistInclude
    });

    return transformSonglist(updated);
};