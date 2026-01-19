import songPFP from "../assets/songpictures/SongPFP.jpg"
import "./songList.css"
import Links from "./common/songLinks"
import type { Song } from "./common/songModel.ts"


function SongList() {
    const songs: Song[] = [
    {
        title: "Forever &",
        artist: "Ejean",
        genre: "R&B",
        release_date: new Date("July, 12, 2024"),
        runtime: "2:27"
    }
]

    return(
        <>
        <main>
            <img className="songPFP"src={songPFP} alt="songpic" />
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
        <Links/>
        </div>
        </>
    )
}

export default SongList
