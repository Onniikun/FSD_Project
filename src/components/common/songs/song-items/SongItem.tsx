import songPFP from "../../../../assets/songpictures/SongPFP.jpg"
import songPFP2 from "../../../../assets/songpictures/SongPFP2.png"
import "./song-item.css"
import type { Song } from "../../../../types/songModel.ts"
import GenreFilter from "../song-filter/GenreFilter.tsx"
import Links from "../song-links/SongLinks.tsx"
import Upvote from "../song-upvote/SongUpVote.tsx"
import { useState } from "react"
import { Link } from 'react-router-dom'

/**
 * Displays song information.
 * @returns - A song item{s}
 */
function SongItem() {
    //use state for a selected Genre.
    const [selectedGenre, setSelectedGenre] = useState<string>("All")
    // For now it the song list will remain here until we have a
    // larger database.
    const songs: Song[] = [
    {
        id: 1,
        title: "Forever &",
        artist: "Ejean",
        genre: "R&B",
        release_date: new Date("July, 12, 2024"),
        runtime: "2:27",
        cover: songPFP,
        links: {
            spotify: "https://open.spotify.com/album/1GjWfyDsXFAQTRq8FLZJN2?si=8WCiBr8MT1i0r-X6eKvqZw",
            apple: "https://music.apple.com/us/song/forever/1767151840",
            amazon: "https://music.amazon.com/tracks/B0DG7633K9?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CA&ref=dm_sh_NSaNT2zY4k7yoZs2WKwfVlwvp",
            youtube: "https://music.youtube.com/watch?v=IOhUwlI6wtc&si=zGQL_NUUXXvgQOLc",

        }
    },
    {
        id: 2,
        title: "Karma",
        artist: "Summer Walker",
        genre: "Dark R&B",
        release_date: new Date("October, 19, 2018"),
        runtime: "3:08",
        cover: songPFP2,
        links: {
            spotify: "https://open.spotify.com/track/2Fyjjpg03fn7n5cj0Qm380",
            apple: "https://music.apple.com/ca/song/karma/1438765304",
            soundcloud: "https://soundcloud.com/summerwalker/karma?in=j1m3n4/sets/tv-ma",
            amazon: "https://music.amazon.ca/tracks/B0B7Z91J56?do=play&agent=googleAssistant&ref=dmm_seo_google_gkp_tracks&explicit=false",
            youtube: "https://music.youtube.com/watch?v=Y-iIdLsiOJQ"
        }
    }
]
    // Displaying the filtered songs.
    //https://www.youtube.com/watch?v=u1yr_HZivzk
    const filteredSongs =
        selectedGenre === "All" ? songs : songs.filter(song => song.genre === selectedGenre)
    return(
        <>
        <GenreFilter selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
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