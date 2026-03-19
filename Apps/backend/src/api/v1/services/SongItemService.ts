import { prisma } from "../../../../lib/prisma";
import { Song } from "../../../../../frontend/src/types/songModel";
import { songs } from "../../../../prisma/seedData"

/**
 * Retrieves all Song Item from Boombox database.
 * @returns -  All Song Items.
 */
export const getAllSongItems = async() => {
    return structuredClone(songs)
}
/**
 * Retrieves a Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @returns - A specific Song Item.
 */
export const getSongItemId = async(id: number) => {
    return songs.find((songs) => songs.id === id) || null;
}
/**
 * Updates a single Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @param updatedSongItem - New Song Item data.
 * @returns - An updated Song Item.
 */
export const updateSongItem = async(id: number, updatedSongItem: Partial<Song>) => {
    const index: number = songs.findIndex((songs: Song) => songs.id === id)
    if (index === -1 ) {
        throw new Error(`Song Item with ID number ${id} not found.`)
    }
    songs[index] = {
        ...songs[index],
        ...updatedSongItem,
    }
    return songs[index]
}
/**
 * Deletes a Song Item based on its ID number.
 * @param id - Song Item ID number.
 * @returns - Deleted Song Item.
 */
export const deleteSongItem = async(id: number) => {
    const index = songs.findIndex((songs: Song) => songs.id === id)
    if(index === -1) {
        return false
    }
    songs.splice(index, 1)

    return true;
}