import "./song-links.css"
import type { songLinks } from "../../../../types/songModel.ts"

type LinksProps = {
    links?: songLinks
}

function Links({ links }: LinksProps) {
    return(
    <>
    <div className="song-media">
        <ul className="song-links">
            <li>
            {links?.spotify && <a href={links.spotify}>Spotify</a>}
            {links?.apple && <a href={links.apple}>Apple Music</a>}
            {links?.soundcloud && <a href={links.soundcloud}>SoundCloud</a>}
            {links?.amazon && <a href={links.amazon}>Amazon</a>}
            {links?.youtube && <a href={links.youtube}>Youtube Music</a>}
            </li>
        </ul>
    </div>
    </>
    )
}

export default Links