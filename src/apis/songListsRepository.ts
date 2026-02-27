import { songListData } from "./mockSongListData";
import { resolveSongs } from "./resolveSongs";
import type { SongList } from "../types/songListTypes";
import type { SongListRecord } from "../types/songListRecord";

/**
 * Converts a SongListRecord (which stores only song IDs)
 * into a fully hydrated SongList containing full Song objects.
 *
 * Missing or deleted songs are silently ignored, ensuring the UI
 * always receives a clean, usable list of Song objects.
 *
 * @param record - The SongListRecord to hydrate into a full SongList
 * @returns A fully hydrated SongList with resolved Song objects
 */
function hydrate(record: SongListRecord): SongList {
    return {
        ...record,
        songs: resolveSongs(record.songIds)
    };
}

/**
 * Retrieves all song lists from the mock database.
 * Each list is hydrated so the UI receives full Song objects.
 *
 * @returns An array of fully hydrated SongLists
 */
export function fetchSongLists(): SongList[] {
    return songListData.map(hydrate);
}

/**
 * Retrieves a single song list by its unique ID.
 * Throws an error if the list cannot be found.
 *
 * @param listId - The ID of the song list to retrieve
 * @returns A fully hydrated SongList
 * @throws Error if no song list with the given ID exists
 */
export function getSongListById(listId: string): SongList {
    const found = songListData.find(l => l.id === listId);
    if (!found) throw new Error(`Failed to fetch song list with id ${listId}`);
    return hydrate(found);
}

/**
 * Creates a new song list using the provided data.
 * A unique ID is generated automatically.
 *
 * The new list is stored as a SongListRecord (IDs only),
 * then hydrated before being returned to the UI.
 *
 * @param newSongList - The data required to create a new song list
 * @returns The newly created and hydrated SongList
 */
export async function createSongList(newSongList: {
    name: string;
    visibility: "public" | "private";
    description: string;
    songIds: number[];
}) {
    const id = `list-${crypto.randomUUID()}`;

    const record: SongListRecord = {
        id,
        ...newSongList
    };

    songListData.push(record);
    return hydrate(record);
}

/**
 * Updates an existing song list.
 * Throws an error if the list cannot be found.
 *
 * The updated record is stored, then hydrated before returning.
 *
 * @param updated - The modified SongListRecord to save
 * @returns The updated and hydrated SongList
 * @throws Error if no song list with the given ID exists
 */
export async function updateSongList(updated: SongListRecord) {
    const index = songListData.findIndex(list => list.id === updated.id);
    if (index === -1) throw new Error(`Failed to update song list with id ${updated.id}`);

    songListData[index] = updated;
    return hydrate(updated);
}

/**
 * Deletes a song list by its ID.
 * Throws an error if the list cannot be found.
 *
 * The removed record is hydrated before being returned,
 * allowing the UI to display what was deleted if needed.
 *
 * @param listId - The ID of the song list to delete
 * @returns The deleted SongList, hydrated
 * @throws Error if no song list with the given ID exists
 */
export async function deleteSongList(listId: string) {
    const index = songListData.findIndex(list => list.id === listId);
    if (index === -1) throw new Error(`Failed to delete song list with id ${listId}`);

    const removed = songListData.splice(index, 1)[0];
    return hydrate(removed);
}