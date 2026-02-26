import "./song-links.css"
import type { songLinks } from "../../../../types/songModel.ts"
import { useSortFilter } from "../../../hooks/useSortAndFilterUI"

type LinksProps = {
    links?: songLinks
}

 // A map list of song platforms.(To add more)
const platform_map:  Record<string, keyof songLinks> = {
    Spotify: "spotify",
    "Apple Music": "apple",
    "SoundCloud": "soundcloud",
    Amazon: "amazon",
    Youtube: "youtube",
}
/**
 * Displays streaming platform links for a song.
 * @param Links - An object containing platform URLs for the song.
 * @returns 
 */
function Links({ links }: LinksProps) {
    const { selectedItem, setSelectedItem } = useSortFilter("Spotify")

    return (
        <div className="song-media">
            <ul className="song-links">
                {Object.entries(platform_map).map(([label, key]) => {
                    // display url from platform list.
                    const url = links?.[key]
                    if (!url) return null
                    return (
                        <li key ={label}>
                            <a href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={selectedItem === label ? "active" : ""}
                            onClick={() => setSelectedItem(label)}
                            >
                            {label}
                            </a>
                        </li>
                    )
                })}
        </ul>
    </div>
    )
}

export default Links