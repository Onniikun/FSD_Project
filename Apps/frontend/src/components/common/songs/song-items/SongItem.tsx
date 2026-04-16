import "./song-item.css"
import type { SongItemSchema } from "../../../../../../../shared/types/SongItemSchema.ts"

import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

import { GenreFilter } from "../song-filter/GenreFilter.tsx"
import { Links } from "../song-links/SongLinks.tsx"
import { LinksFilter } from "../song-filter/LinkFilter.tsx" 
import { AddCollection } from "../song-collection/SongAddCollection.tsx"

import { fetchAllSongs } from "../../../../apis/SongItemRepo.ts"
import { toggleSongInList } from "../../../../apis/songListsRepository.ts"

import { useSortFilter } from "../../../../hooks/useSortAndFilterUI.ts"
import { filterSongGenre, filterSongLinks } from "../../../../services/SongItemService.ts"
import * as DiscoveryService from "../../../../services/discoveryService.ts";
import { useMood } from "../../../../hooks/useMood.ts";
import type { FullSonglist } from "../../../../../../../shared/types/songListTypes.ts";
import { fetchSongLists } from "../../../../apis/songListsRepository.ts"
import { useAuth } from "@clerk/clerk-react"

/**
 * Displays song information.
 * @returns - A song item{s}
 */
export function SongItem({ query = "" }: { query?: string }) {
    const { getToken } = useAuth()
    const { id } = useParams()
    const { mood } = useMood();
    //use state for a selected Genre.(Used my hook to display the filtered genre)
    /**
     * Unlike my GenreFilter this hook displays the actual Song Item{s} based 
     * on the genre. (While the other one displays it for the button.)
     * 
     * This hook is my useSortAndFilter hook.
     */
    const {
        selectedItem: selectedGenre,
        setSelectedItem: setSelectedGenre
    } = useSortFilter<string>("All")
    /**
     * This component uses the SongItemRepo file. Where we useEffect to render 
     * the data from calling the API to display it; this is for when we have a back-end components.
     * 
     * This method is from my repository method.
     */
    const [songs, setSongs] = useState<SongItemSchema[]>([])
    const [selectedLinks, setSelectedLinks] = useState<string[]>([])
    //https://react.dev/reference/react/useEffect
    useEffect(() => {
        /**
         * Since artist, genre and links are in sepearte tables(arrays)
         * They need to be rendered differently.
         * 
         * If an artist or genre is length is 0/undefined then we add an "unknown" title 
         * to the artist or genre. 
         * 
         * Release date gets converted from a string to a date the formated in the final render.
         * Maps out the original Song item schema.
         */
        async function loadSongs() {
            try {
                const data = await fetchAllSongs()
                const mappedSongs: SongItemSchema[] = data.map((song) => ({
                    ...song,
                    release_date: song.releaseDate ? new Date(song.releaseDate) : new Date(),
                    artist: song.artist && song.artist.length > 0
                        ? Array.isArray(song.artist)
                            ? song.artist
                            : [song.artist]
                        : ["Unknown Artist"],
                    genre: song.genre && song.genre.length > 0
                        ? Array.isArray(song.genre)
                            ? song.genre
                            : [song.genre]
                        : ["Unknown Genre"],
                    links: song.links || [],
                }))
                setSongs(mappedSongs)
            } catch (error) {
                console.error(error)
            }
        }
        loadSongs()
    }, [])

    const [lists, setLists] = useState<FullSonglist[]>([]);
    useEffect(() => {
        async function loadLists() {
            try {
                const token = await getToken();
                const data = await fetchSongLists(token); 
                setLists(data);
            } catch (err) {
                console.error(err);
            }
        }
        loadLists()
    }, [])

    // NEW: Toggle handler
    const handleToggleSongInList = async (listId: string, songId: number) => {
        try {
            const token = await getToken();
            if (!token) return console.error("No token");
            const updatedList = await toggleSongInList(listId, songId, token);

            // Update state with the updated list
            setLists(prev =>
                prev.map(list =>
                    list.id === updatedList.id ? updatedList : list
                )
            )
        } catch (error) {
            console.error("Failed to toggle song:", error)
        }
    }

    // Filtering logic
    const genreFiltered = filterSongGenre(songs, selectedGenre)
    const linkFiltered = filterSongLinks(genreFiltered, selectedLinks)
    /**
     * by clicking the song cover it directs the user to only that song item.
     * 
     * It has the dual purpose of displaying the only the song by that id
     * or filtered by song genre and or platform links.
     */
    let displayedSongs: SongItemSchema[];

    if (id) {
        displayedSongs = linkFiltered.filter(song => song.id === Number(id));
    } else {
        displayedSongs = DiscoveryService.applyDiscovery(linkFiltered, {
            query,
            mood,
            genre: selectedGenre,
            sort: "title-asc",
        });
    }
    return(
        <>
            {!id && (
                <>
                    <GenreFilter onChange={setSelectedGenre} />
                    <LinksFilter onChange={setSelectedLinks} />
            </>)}
        {/* {console.log("Name of songs", displayedSongs)}
        {console.log("Links",songs.map(song=>song.links))} */}
        {/* {console.log("Selected:", lists)} */}
        {/* {console.log("Song platforms:", songs.map(s => s.links?.map(l => `"${l.platform}"`)))} */}
            <section className="song-item">
                <ul>
                    {displayedSongs.length === 0 ? (
                        <p>Sorry, We haven't added that yet.</p>
                    ) : (
                    displayedSongs.map((song: SongItemSchema)=> (
                            <li key={song.id} className="song-card">
                                <div>
                                    <Link to={`/songs/${song.id}`}>
                                        <div className="songWrapper">
                                <img className="songPFP"
                                                src={song.cover}
                                    alt="songpic" />
                                        </div>
                                    </Link>
                                    <Links links={song.links} />
                                </div>
                                <div className="song-info">
                                    <h2 className="title">{song.title}</h2>
                                    <p>{song.artist.join(", ")}</p>
                                    <p>Genre: {song.genre.join(", ")}</p>
                            <p>Release date: {new Date (song.releaseDate).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                            })}</p>
                                    <p>Runtime: {song.runtime}</p>

                                    {/* NEW: AddCollection with toggle */}
                                    <AddCollection
                                        lists={lists}
                                        songId={song.id}
                                        onToggleSongInList={handleToggleSongInList}
                                    />
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </section>
        </>
    )
}