import "./song-item.css"
import { GenreFilter } from "../song-filter/GenreFilter.tsx"
import Links from "../song-links/SongLinks.tsx"
import Upvote from "../song-upvote/SongUpvote.tsx"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import type { Song } from "../../../../types/songModel.ts"
import { fetchAllSongs } from "../../../../apis/SongItemRepo.ts"
import { useSortFilter } from "../../../hooks/useSortAndFilterUI.ts"

/**
 * Displays song information.
 * @returns - A song item{s}
 */
export function SongItem() {
    //use state for a selected Genre.(Used my hook to display the filtered genre)
    /**
     * Unlike my GenreFilter this hook displays the actual Song Item based 
     * on the genre. (While the other one displays it for the button.)
     * 
     * This hook is my useSortAndFilter hook.
     */
    const {selectedItem: selectedGenre, setSelectedItem: setSelectedGenre} = useSortFilter<string>("All")
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
    // Displaying the filtered songs.
    //https://www.youtube.com/watch?v=u1yr_HZivzk
    const filteredSongs =
        selectedGenre === "All" ? songs : songs.filter(song => song.genre === selectedGenre)
    return(
        <>
        <GenreFilter onChange={setSelectedGenre}/>
        <section className="song-item">
            <ul>
                {filteredSongs.length === 0 ? (
                    <p>Sorry, We haven't added that yet.</p>
                ) : (
                filteredSongs.map((song)=> (
                    <li key={song.id} className="song-card">
                    <div> 
                        <Link to={`/song:${song.title}/${song.artist}`}>
                            <div className="songWrapper">
                                <img className="songPFP"src={song.cover} alt="songpic" />
                            </div>
                        </Link>
                        <Links links={song.links} />
                    </div>
                    <div className="song-info">
                            <h2 className="title">{song.title}</h2>
                            <p>{song.artist}</p>
                            <p>Genre: {song.genre}</p>
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
