import type { CreateSongListData, FullSonglist, UpdateSongListData } from "../../../../shared/types/songListTypes";

type SongListsResponseJSON = { message: string; data: FullSonglist[] };
type SongListResponseJSON = { message: string; data: FullSonglist };
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const SONGLIST_ENDPOINT = "/songlists"

/**
 * Fetches all song lists from the backend.
 * @param sessionToken - Clerk session token for authentication (optional)
 * @returns All song lists returned by the server.
 * @throws Error if the request fails or the server responds with an error
 */
export async function fetchSongLists(sessionToken?: string | null): Promise<FullSonglist []> {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}`,
        sessionToken? {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            } 
        } : undefined
    );

    if (!response.ok) {
        throw new Error("Failed to fetch all song lists");
    }

    const json: SongListsResponseJSON = await response.json();
    return json.data;
};

/**
 * Fetches a single song list by its unique ID.
 * @param listId - The ID of the song list to retrieve
 * @param sessionToken - Clerk session token for authentication (optional)
 * @returns The requested song list
 * @throws Error if the song list cannot be found or the request fails
 */
export async function getSongListById(
    listId: string, 
    sessionToken?: string | null
): Promise<FullSonglist > {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}/${listId}`,
        sessionToken? {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            } 
        } : undefined
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
 * @param sessionToken - Clerk session token for authentication (optional)
 * @returns The newly created and hydrated SongList
 * @throws Error if creation fails or the server responds with an error
 */
export async function createSongList(
  data: CreateSongListData,
  sessionToken?: string | null
): Promise<FullSonglist> {
    const response: Response = await fetch(`${BASE_URL}${SONGLIST_ENDPOINT}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      ...(sessionToken ? { Authorization: `Bearer ${sessionToken}` } : {})
    }
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
 * @param sessionToken - Clerk session token for authentication (optional)
 * @returns The updated song list
 * @throws Error if no song list with the given ID exists or the update fails
 */
export async function updateSongList(
    id: string,
    data: UpdateSongListData,
    sessionToken?: string | null
): Promise<FullSonglist> {
  const response: Response = await fetch(
    `${BASE_URL}${SONGLIST_ENDPOINT}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to update the song list with id ${id}`);
  }

  const json: SongListResponseJSON = await response.json();
  return json.data;
};

/**
 * Deletes a song list by its ID.
 * @param listId - The ID of the song list to delete
 * @param sessionToken - Clerk session token for authentication (optional)
 * @returns The deleted song list
 * @throws Error if no song list with the given ID exists or the deletion fails
 */
export async function deleteSongList(
    listId: string, 
    sessionToken?: string | null
): Promise<FullSonglist> {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}/${listId}`, 
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to delete song list with id ${listId}`);
    }

    const json: SongListResponseJSON = await response.json();
    return json.data;
};

/**
 * Toggles a song in a song list (add/remove).
 * @param listId - The ID of the song list
 * @param songId - The ID of the song to toggle
 * @param sessionToken - Clerk session token for authentication (optional)
 * @returns The updated song list
 */
export async function toggleSongInList(
    listId: string,
    songId: number,
    sessionToken?: string | null
): Promise<FullSonglist> {
    const response: Response = await fetch(
        `${BASE_URL}${SONGLIST_ENDPOINT}/${listId}/toggle/${songId}`,
        { 
            method: "POST",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to toggle song ${songId} in list ${listId}`);
    }

    const json: SongListResponseJSON = await response.json();
    return json.data;
}
