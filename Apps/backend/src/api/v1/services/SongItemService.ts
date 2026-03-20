import { prisma } from "../../../../lib/prisma";
import { SongItem } from "../../../generated/prisma/client";

/**
 * Retrieves all Song Item from Boombox database.
 * @returns -  All Song Items.
 */
export const getAllSongItems = async(): Promise<SongItem[]> => {
    return (await prisma.SongItem.findmany({
        OrderBy: {
            title: "asc"
        }
    }))
}
/**
 * Retrieves a Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @returns - A specific Song Item.
 */
export const getSongItemId = async(id: number): Promise<SongItem | null> => {
    try {
        const SongItem = prisma.SongItem.findUnique({
            where: {
                id: id
            }
        })
        if(!id){
            return null
        } else {
            return SongItem
        }
    } catch (error) {
        throw new Error(`Failed to retrieve Song Item by ID number: ${id}`)
    }
}
/**
 * Creates a new Song Item.
 * 
 * - Artists and Genres are pulled from database if they already exist to prevent duplicates
 * - Links are created with different URL platforms links for each Song Item.
 * 
 * @param SongItemData - Song Item data.
 * @returns - A new Song Item.
 */
export const createSongItem = async(SongItemData: {
    title: string;
    artist: string[];
    genre: string[];
    release_date?: Date;
    runtime?: string;
    cover?: string;
    links?: { platform: string; url: string }[];
}): Promise<SongItem> => {
    const newSongItem: SongItem = await prisma.SongItem.create({
        // Data is that part of the main database with single static values.
        data: {
            Title: SongItemData.title,
            Release_date: SongItemData.release_date,
            Runtime: SongItemData.runtime,
            Cover: SongItemData.cover,
        },
        // Since artist and genres can belong to many different SongItems
        // They have to be sepearted to so that each Song Item ID is different from each other.
        // https://www.prisma.io/docs/orm/reference/prisma-client-reference
        artist: {
            create: SongItemData.artist.map((name) =>({
                artist: {
                    connectOrCreate: {
                        where: { Artist_name: name },
                        create: { Artist_name: name },
                    }
                }
            }))
        },
        genre: {
            create: SongItemData.genre.map((name) =>({
                Genre: {
                    connectOrCreate: {
                        where: { Genre_name: name },
                        create:{ Genre_name: name },
                    }
                }
            }))
        },
        // Every Song Item has their own list of Links that is available to them.
        links: SongItemData.links
            ? {
                create: SongItemData.links.map((link) => ({
                    platform: link.platform,
                    URL: link.url
                }))
            }
        : undefined
    })
    return newSongItem;
}


/**
 * Updates a single Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @param SongItem - Song Item data.
 * @returns - An updated Song Item.
 */
export const updateSongItem = async(id: number, 
    SongItem: {
        title: string, 
        release_date: Date, 
        runtime: string, 
        cover: string, 
    }
): Promise<SongItem>  => {
    const updatedSongItem = await prisma.SongItem.update({
        where: {
            id: id
        },
        updatedSongItem: {
            ...SongItem
        }
    });
    return updatedSongItem
}
/**
 * Deletes a Song Item based on its ID number.
 * @param id - Song Item ID number.
 */
export const deleteSongItem = async(id: number): Promise<void> => {
    await prisma.SongItem.delete({
        where: {
            id: id
        }
    })
}
