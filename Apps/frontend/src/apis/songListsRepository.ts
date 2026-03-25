import type { CreateSongListData, SongList } from "../../../../shared/types/songListTypes";
import type { SongListRecord } from "../../../../shared/types/songListRecord";

type SongListsResponseJSON = { message: string; data: SongList[] };
type SongListResponseJSON = { message: string; data: SongList };
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const SONGLIST_ENDPOINT = "/songlists"

/**
 * Fetches all song lists from the backend.
 * @returns All song lists returned by the server.
 * @throws Error if the request fails or the server responds with an error
 */
export async function fetchSongLists(): Promise<SongList[]> {
    const response: Response = await fetch(`${BASE_URL}${SONGLIST_ENDPOINT}`);

    if (!response.ok) {
        throw new Error("Failed to fetch all song lists");
    }

    const json: SongListsResponseJSON = await response.json();
    return json.data;
};

/**
 * Fetches a single song list by its unique ID.
 * @param listId - The ID of the song list to retrieve
 * @returns The requested song list
 * @throws Error if the song list cannot be found or the request fails
 */
export async function getSongListById(listId: string): Promise<SongList> {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}/${listId}`
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch song list with id ${listId}`);
    }

    const json: SongListResponseJSON = await response.json();
    return json.data;
};

/**
 * Creates a new song list with the provided data.
 * @param data - The data required to create the song list
 * @returns The newly created and hydrated SongList
 * @throws Error if creation fails or the server responds with an error
 */
export async function createSongList(data: CreateSongListData): Promise<SongList> {
    const response: Response = await fetch(`${BASE_URL}${SONGLIST_ENDPOINT}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 
            "Content-Type": "application/json", 
        },
        
    });

    if (!response.ok) {
        throw new Error("Failed to create a song list");
    }

    const json: SongListResponseJSON = await response.json();
    return json.data;
};

/**
 * Updates an existing song list.
 * @param updated - The updated song list data
 * @returns The updated song list
 * @throws Error if no song list with the given ID exists or the update fails
 */
export async function updateSongList(updated: SongListRecord): Promise<SongList> {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}/${updated.id}`, 
        {
            method: "PUT",
            body: JSON.stringify(updated),
            headers: { 
                "Content-Type": "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to update the song list with id ${updated.id}`);
    }

    const json: SongListResponseJSON = await response.json();
    return json.data;
};

/**
 * Deletes a song list by its ID.
 * @param listId - The ID of the song list to delete
 * @returns The deleted song list
 * @throws Error if no song list with the given ID exists or the deletion fails
 */
export async function deleteSongList(listId: string): Promise<SongList> {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}/${listId}`, 
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to delete song list with id ${listId}`);
    }

    const json: SongListResponseJSON = await response.json();
    return json.data;
};
