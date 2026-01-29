import songPFP from "../../../assets/songpictures/SongPFP.jpg"
import songPFP2 from "../../../assets/songpictures/SongPFP2.png"
import "./SongItem.css"
import type { Song } from "../../../types/songModel.ts"



function SongItem() {
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
        release_date: new Date("2018"),
        runtime: "3:08",
        cover: songPFP2,
        links: {
            spotify: "https://open.spotify.com/track/2Fyjjpg03fn7n5cj0Qm380",
            apple: "https://music.apple.com/ca/song/karma/1438765304",
            soundcloud: "https://soundcloud.com/summerwalker/karma?in=j1m3n4/sets/tv-ma"
        }
    }
]
    return(
        <>
        <section className="song-item">
            <ul>
                {songs.map((song)=> (
                    <li key={song.id}>
                        <img className="songPFP"src={song.cover} alt="songpic" />
                        <div className="song-info">
                            <h2>{song.title}</h2>
                            <p>{song.artist}</p>
                            <p>Genre: {song.genre}</p>
                            <p>Release date: {song.release_date.toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</p>
                            <p>Runtime: {songs[0].runtime}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default SongItem
