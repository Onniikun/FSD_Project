import "./songLinks.css"
import NavLinks from "./navInterface/navinterface"

function Links() {
    return(
    <>
    <div className="Links">
        <ul>
            <li className="spotify">
                <a href="https://open.spotify.com/album/1GjWfyDsXFAQTRq8FLZJN2?si=8WCiBr8MT1i0r-X6eKvqZw"target="_blank">Spotify</a>
            </li>
            <li className="apple">
                <a href="https://music.apple.com/us/song/forever/1767151840"target="_blank">Apple Music</a>
            </li>
        </ul>
    </div>
    <NavLinks/>
    </>
    )
}

export default Links