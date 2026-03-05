import "./song-item.css"
import type { Song } from "../../../../types/songModel.ts"

import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

import { GenreFilter } from "../song-filter/GenreFilter.tsx"
import { Links } from "../song-links/SongLinks.tsx"
import { LinksFilter } from "../song-filter/LinkFilter.tsx" 
import { Upvote } from "../song-upvote/SongUpvote.tsx"

import { fetchAllSongs } from "../../../../apis/SongItemRepo.ts"
import { useSortFilter } from "../../../../hooks/useSortAndFilterUI.ts"
import { filterSongGenre, filterSongLinks } from "../../../../services/SongItemService.ts"
import * as DiscoveryService from "../../../../services/discoveryService";
import { useMood } from "../../../../hooks/useMood";

/**
 * Displays song information.
 * @returns - A song item{s}
 */
export function SongItem({ query = "" }: { query?: string }) {
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
    const [songs, setSongs] = useState<Song[]>([])
    const [selectedLinks, setSelectedLinks] = useState<string[]>([])
    //https://react.dev/reference/react/useEffect
    useEffect(() => {
        const SongData = fetchAllSongs()
        setSongs(SongData)
        }, [])
    
    //Filters out genres and available platforms.
    const genreFiltered = filterSongGenre(songs, selectedGenre)
    const linkFiltered = filterSongLinks(genreFiltered, selectedLinks)
    /**
     * by clicking the song cover it directs the user to only that song item.
     * 
     * It has the dual purpose of displaying the only the song by that id
     * or filtered by song genre and or platform links.
     */
    let displayedSongs: Song[];

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
        {console.log("Name of songs", displayedSongs)}
        <section className="song-item">
            <ul>
                {displayedSongs.length === 0 ? (
                    <p>Sorry, We haven't added that yet.</p>
                ) : (
                    displayedSongs.map((song: Song)=> (
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
                            <p>Release date: {song.release_date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}</p>
                            <p>Runtime: {song.runtime}</p>  
                            <Upvote />                   
                        </div>
                    </li>
                )))}
            </ul>
        </section>
        </>
    )
}
