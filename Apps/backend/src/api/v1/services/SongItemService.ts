import { prisma } from "../../../../lib/prisma";
import { Song } from "../../../../../frontend/src/types/songModel";
import { songs } from "../../../../prisma/seedData"

/**
 * 
 * @returns 
 */
export const getAllSongItems = async() => {
    return structuredClone(songs)
}
/**
 * 
 * @param id 
 * @returns 
 */
export const getSongItemId = async(id: number) => {
    return songs.find((songs) => songs.id === id) || null;
}
/**
 * 
 * @param id 
 * @param updatedSongItem 
 * @returns 
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
 * 
 * @param id 
 * @returns 
 */
export const deleteSongItem = async(id: number) => {
    const index = songs.findIndex((songs: Song) => songs.id === id)
    if(index === -1) {
        return false
    }
    songs.splice(index, 1)

    return true;
}