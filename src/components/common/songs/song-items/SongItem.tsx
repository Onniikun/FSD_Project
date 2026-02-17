import { songs } from "../../../../apis/SongItemData.ts"
import "./song-item.css"
import GenreFilter from "../song-filter/GenreFilter.tsx"
import Links from "../song-links/SongLinks.tsx"
import Upvote from "../song-upvote/SongUpvote.tsx"
import { useState } from "react"
import { Link } from 'react-router-dom'

/**
 * Displays song information.
 * @returns - A song item{s}
 */
function SongItem() {
    //use state for a selected Genre.
    const [selectedGenre, setSelectedGenre] = useState<string>("All")
    // Displaying the filtered songs.
    //https://www.youtube.com/watch?v=u1yr_HZivzk
    const filteredSongs =
        selectedGenre === "All" ? songs : songs.filter(song => song.genre === selectedGenre)
    return(
        <>
        <h2 className="message">Boomboxd's Favourite Genres</h2>
        <GenreFilter onChange={setSelectedGenre}/>
        <section className="song-item">
            <ul>
                {filteredSongs.length === 0 ? (
                    <p>Sorry, We haven't added that yet.</p>
                ) : (
                filteredSongs.map((song)=> (
                    <li key={song.id} className="song-card">
                    <div> 
                        {/* To add link to song item. */}
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

export default SongItem;