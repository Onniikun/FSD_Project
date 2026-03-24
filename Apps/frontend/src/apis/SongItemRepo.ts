import type { Song } from "../types/songModel.ts"
import { songs } from "../apis/SongItemData.ts"

/**
 * Retrieves all songs.
 * @returns - all songs.
 */
export function fetchAllSongs(): Song[] {
    return songs;
};

/**
 * Retrieves song based on ID number.
 * @param id - Song ID number.
 * @returns Song Item.
 */
export function fetchSongById(songId: number): Song {
    const getSongId = songs.find(t => t.id === songId);

    if(!getSongId) {
        throw new Error(`Cannot find song with id number ${songId}`);
    }

    return getSongId;
};

/**
 * Updates an existing song item.
 * @param updateSongItem - Updated song item data.
 * @returns - The new updated Song Item.
 */
export async function updateSongItem(updateSongItem: Song): Promise<Song> {
    const songItem = songs.findIndex(t => t.id === updateSongItem.id)

    if(songItem === -1) {
        throw new Error(`Failed to update song item ${updateSongItem.id}`)
    }
    songs[songItem] = updateSongItem;
    return songs[songItem];
};
/**
 * Deletes song item.
 * @param songId - Song Item ID.
 */
export async function deleteSongItem(songId: number) {
    const deleteSong = songs.findIndex(t => t.id === songId)

    if(deleteSong === -1) {
        throw new Error(`Failed to delete Song Item ${songId}`)
    } else 

    songs.splice(deleteSong, 1)
}




// import type { SongItemSchema } from "../../../../shared/types/SongItemSchema";

// /**
//  * Global variables that takes base URL for backend.
//  */
// type SongItemsResponseJSON = {message: String, data: SongItemSchema[]};
// type SongItemResponseJSON = {message: String, data: SongItemSchema};
// const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
// const SONGITEM_ENDPOINT = "/songs"



// /**
//  * Retrieves all songs.
//  * @returns - all songs.
//  */
// export async function fetchAllSongs(): Promise<SongItemSchema[]> {
//     const songItemSchemaRepo: Response = await fetch(
//         `${BASE_URL}${SONGITEM_ENDPOINT}`
//     )
//     if(!songItemSchemaRepo.ok) {
//         throw new Error("Failed to fetch all Song Items")
//     }
//     const json: SongItemsResponseJSON = await songItemSchemaRepo.json();
//     return json.data;
// };

// /**
//  * Retrieves song based on ID number.
//  * @param songId - Song ID number.
//  * @returns Song Item.
//  */
// export async function fetchSongById(songId: number): Promise<SongItemSchema>  {
//     const songItemSchemaRepo: Response = await fetch(
//         `${BASE_URL}${SONGITEM_ENDPOINT}/${songId}`
//     )
//     if(!songItemSchemaRepo.ok) {
//         throw new Error(`Failed to fetch Song Item ${songId}`)
//     }

//     const json: SongItemResponseJSON = await songItemSchemaRepo.json();
//     return json.data;
// };

// /**
//  * Creates a new Song Item.
//  * @param id - Song ID number.
//  * @returns - New Song Item.
//  */
// export async function name(newSongItem: SongItemSchema): Promise<SongItemSchema> {
//     const songItemSchemaRepo: Response = await fetch(
//         `${BASE_URL}${SONGITEM_ENDPOINT}/${newSongItem}`,
//         {
//             method: "POST",
//             body: JSON.stringify({newSongItem}),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         }
//     )
//     if(!songItemSchemaRepo.ok) {
//         throw new Error("`Failed to upload Song Item")
//     }

//     const json: SongItemResponseJSON = await songItemSchemaRepo.json();
//     return json.data;  
// }

// /**
//  * Updates an existing song item.
//  * @param updateSongItem - Updated song item data.
//  * @returns - The new updated Song Item.
//  */
// export async function updateSongItem(updateSongItem: SongItemSchema): Promise<SongItemSchema>  {
//     const songItemSchemaRepo: Response = await fetch(
//         `${BASE_URL}${SONGITEM_ENDPOINT}/${updateSongItem}`,
//         {
//             method: "PUT",
//             body: JSON.stringify({...updateSongItem}),
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         }
//     )
//     if(!songItemSchemaRepo.ok) {
//         throw new Error(`Failed to update Song Item with ${updateSongItem}`)
//     }

//     const json: SongItemResponseJSON = await songItemSchemaRepo.json();
//     return json.data;
// };
// /**
//  * Deletes song item.
//  * @param songId - Song Item ID.
//  * @returns - Deleted Song Item.
//  */
// export async function deleteSongItem(songId: number): Promise<SongItemSchema>{
//     const songItemSchemaRepo: Response = await fetch(
//         `${BASE_URL}${SONGITEM_ENDPOINT}/${songId}`,
//         {
//             method: "DELETE"
//         }
//     )
//     if(!songItemSchemaRepo.ok) {
//         throw new Error(`Failed to delete Song Item ${songId}`)
//     }

//     const json: SongItemResponseJSON = await songItemSchemaRepo.json();
//     return json.data;
// }