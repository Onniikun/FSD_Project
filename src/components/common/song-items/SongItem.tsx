import songPFP from "../../../assets/songpictures/SongPFP.jpg"
import songPFP2 from "../../../assets/songpictures/SongPFP2.png"
import "./SongItem.css"
import type { Song } from "../../../types/songModel.ts"
import GenreFilter from "../song-fliter/genre-filter.tsx"
import { useState } from "react"    

export function SongItem() {
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
            apple: "https://music.apple.com/us/song/forever/1767151840"
        }
    },
    {
        id: 2,
        title: "Karma",
        artist: "Summer Walker",
        genre: "Dark R&B",
        release_date: new Date("October, 19,2018"),
        runtime: "3:08",
        cover: songPFP2,
        links: {
            spotify: "https://open.spotify.com/track/2Fyjjpg03fn7n5cj0Qm380",
            apple: "https://music.apple.com/ca/song/karma/1438765304",
            soundcloud: "https://soundcloud.com/summerwalker/karma?in=j1m3n4/sets/tv-ma"
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
                {filteredSongs.map((song)=> (
                    <li key={song.id} className="song-card">
                        <img className="songPFP"src={song.cover} alt="songpic" />
                    <div className="song-info">

                        <div>
                            <h2 className="title">{song.title}</h2>
                            <p>{song.artist}</p>
                            <p>Genre: {song.genre}</p>
                            <p>Release date: {song.release_date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}</p>
                            <p>Runtime: {song.runtime}</p>
                        </div>          
                                      
                        <div className="song-media">
                            <ul className="song-links">
                                {song.links?.spotify && <a href={song.links.spotify}>Spotify</a>}
                                {song.links?.apple && <a href={song.links.apple}>Apple Music</a>}
                                {song.links?.soundcloud && <a href={song.links.soundcloud}>SoundCloud</a>}
                            </ul>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default SongItem
