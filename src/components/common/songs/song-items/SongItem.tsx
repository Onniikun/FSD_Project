import "./song-item.css"
import { GenreFilter } from "../song-filter/GenreFilter.tsx"
import { Links } from "../song-links/SongLinks.tsx"
import Upvote from "../song-upvote/SongUpvote.tsx"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'

import type { Song } from "../../../../types/songModel.ts"
import { fetchAllSongs } from "../../../../apis/SongItemRepo.ts"
import { useSortFilter } from "../../../hooks/useSortAndFilterUI.ts"
import { filterSongGenre } from "../../../services/SongItemService.ts"   

/**
 * Displays song information.
 * @returns - A song item{s}
 */
export function SongItem() {
    const { id } = useParams()
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
    //https://react.dev/reference/react/useEffect
    useEffect(() => {
        const SongData = fetchAllSongs()
        setSongs(SongData)}, [])
    /**
     * by clicking the song cover it directs the user to only that song item.
     * 
     * It has the dual purpose of displaying the only the song by that id
     * or filtered by song genre(Later by platform links, etc.)
     */
    const displayedSongs = id 
        ? songs.filter(song => song.id === Number(id))
        : filterSongGenre(songs, selectedGenre)
    return(
        <>
        {!id && <GenreFilter onChange={setSelectedGenre}/>}
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
                                <img className="songPFP"src={song.cover} alt="songpic" />
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
