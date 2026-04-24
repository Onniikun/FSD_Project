import { prisma } from "../../../../prisma/client";
import type { 
    FullSonglist, 
    CreateSongListData, 
    UpdateSongListData } from "../../../../../../shared/types/songListTypes";
import { transformSonglist } from "../utils/transformSonglist";
import { songlistInclude } from "../utils/songlistInclude";


/**
 * Retrieves all songlists
 * - Signed-in users: public + their private lists
 * - Non-signed-in users: only public lists
 * @returns Array of all songlists
 */
export const fetchAllSonglists = async (
    userId: string | null
): Promise<FullSonglist[]> => {
    const orConditions: any[] = [{ visibility: "public" }];

    if (userId) {
        orConditions.push({ userId });
    }
    // OR operator https://www.prisma.io/docs/v6/orm/prisma-client/queries/filtering-and-sorting
    const lists = await prisma.songlist.findMany({
        where: { OR: orConditions },
        select: songlistInclude
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
            select: songlistInclude
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
    songlistData: CreateSongListData & { userId: string }
) => {
    const { name, description, cover, visibility, songIds, userId } = songlistData;

    const created = await prisma.songlist.create({
        data: {
            name,
            description: description ?? null,
            cover: cover ?? null,
            visibility: visibility ?? "private",
            userId,
            songs: songIds
                ? {
                    create: songIds.map(id => ({ songId: id }))
                }
                : undefined
        },
        select: songlistInclude
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
        select: songlistInclude
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
        select: songlistInclude
    });

    return transformSonglist(updated);
};

export const verifySonglistOwnership = async (
    id: string,
    userId: string | null
) => {
    if (!userId) {
        const error: any = new Error("Unauthorized");
        error.status = 401;
        throw error;
    }

    const songlist: FullSonglist | null = await getSonglistById(id);

    if (!songlist) {
        const error: any = new Error("Songlist not found");
        error.status = 404;
        throw error;
    }

    if (songlist.userId !== userId) {
        const error: any = new Error("Not authorized");
        error.status = 403;
        throw error;
    }

    return songlist;
};