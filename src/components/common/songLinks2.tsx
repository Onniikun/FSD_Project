import "./songLinks.css"
import NavLinks from "./navInterface/navinterface"

function Links2 () {
    return(
    <>
    <div className="Links">
        <ul>
            <li className="spotify">
                <a href="https://open.spotify.com/track/2Fyjjpg03fn7n5cj0Qm380"target="_blank">Spotify</a>
            </li>
            <li className="apple">
                <a href="https://music.apple.com/ca/song/karma/1438765304"target="_blank">Apple Music</a>
            </li>
        </ul>
    </div>
    <NavLinks/>
    </>
    )
}

export default Links2