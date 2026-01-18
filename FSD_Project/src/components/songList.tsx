import songPFP from "../assets/songpictures/SongPFP.jpg"
import "./songList.css"
import Links from "./common/songLinks"


function SongList() {
    return(
        <>
        <main>
            <img className="songPFP"src={songPFP} alt="songpic" />
            <div className="text">
                <h2 className="title">Forever &</h2>
                <p className="artist">Ejean</p>
                <p className="date">Release date: 2024</p>
            </div>
        </main>
        <div>
        <Links/>
        </div>
        </>
    )
}

export default SongList
