import songPFP2 from "../assets/songpictures/SongPFP2.png"
import "./songList.css"
import Links2 from "../song-links/SongLinks2.tsx"
import type { Song } from "../../../types/songModel.ts"


function SongList2() {
    const songs: Song[] = [
    {
        title: "Karma",
        artist: "Summer Walker",
        genre: "Dark R&B",
        release_date: new Date("2018"),
        runtime: "3:08"
    }
]
    return(
        <>
        <main>
            <img className="songPFP"src={songPFP2} alt="songpic" />
            <div className="song-info">
                <h2>{songs[0].title}</h2>
                <p>{songs[0].artist}</p>
                <p>Genre: {songs[0].genre}</p>
                <p>Release date: {songs[0].release_date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}</p>
                <p>Runtime: {songs[0].runtime}</p>
            </div>
        </main>
        <div>
        <Links2/>
        </div>
        </>
    )
}

export default SongList2
