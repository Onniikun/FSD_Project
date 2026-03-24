import { prisma } from "../../../../lib/prisma";
import { songItem } from "@prisma/client"

/**
 * Retrieves all Song Item from Boombox database.
 * @returns -  All Song Items.
 */
export const getAllsongItems = async(): Promise<songItem[]> => {
    return (await prisma.songItem.findMany({
        orderBy: {
            title: "asc"
        }
    }))
}
/**
 * Retrieves a Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @returns - A specific Song Item.
 */
export const getsongItemId = async(id: number): Promise<songItem | null> => {
    try {
        const songItem = prisma.songItem.findUnique({
            where: {
                id: id
            }
        })
        if(!id){
            return null
        } else {
            return songItem
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
 * @param songItemData - Song Item data.
 * @returns - A new Song Item.
 */
export const createsongItem = async(songItemData: {
    title: string;
    artist: string[];
    genre: string[];
    release_date?: Date;
    runtime?: string;
    cover?: string;
    links?: { platform: string; url: string }[];
}): Promise<songItem> => {
    const newsongItem: songItem = await prisma.songItem.create({
        // Data is that part of the main database with single static values.
        data: {
            title: songItemData.title,
            releaseDate: songItemData.release_date,
            runtime: songItemData.runtime,
            cover: songItemData.cover,
            // Since artist and genres can belong to many different songItems
            // They have to be sepearted to so that each Song Item ID is different from each other.
            // https://www.prisma.io/docs/orm/reference/prisma-client-reference
            artists: {
                create: songItemData.artist.map((name) =>({
                    artist: {
                        connectOrCreate: {
                            where: { name: name },
                            create: { name: name },
                        }
                    }
                }))
            },
            genres: {
                create: songItemData.genre.map((name) =>({
                    genre: {
                        connectOrCreate: {
                            where: { name: name },
                            create:{ name: name },
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
        release_date: Date, 
        runtime: string, 
        cover: string, 
    }
): Promise<songItem>  => {
    const updatedsongItem = await prisma.songItem.update({
        where: {
            id: id
        },
        data: {
            ...songItem
        }
    });
    return updatedsongItem
}
/**
 * Deletes a Song Item based on its ID number.
 * @param id - Song Item ID number.
 */
export const deletesongItem = async(id: number): Promise<void> => {
    await prisma.songItem.delete({
        where: {
            id: id
        }
    })
}
