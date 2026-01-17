import "./songList.css";
import songPFP from "../assets/songpictures/SongPFP.jpg"
import "./songList.css"

function SongList() {
    return(
        <>
        <main>
            <img className="songPFP"src={songPFP} alt="songpic" />
            <div>
            <h2 className="title">Forever &</h2>
            <p className="artist">Ejean</p>
            <p className="date">Release date: 2024</p>
            </div>
        </main>
        </>
    )
}

export default SongList
