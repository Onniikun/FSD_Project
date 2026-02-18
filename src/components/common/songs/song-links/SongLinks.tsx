import "./song-links.css"
import type { songLinks } from "../../../../types/songModel.ts"
import { useSortFilter } from "../../../hooks/useSortAndFilterUI"

type LinksProps = {
    links?: songLinks
}
/**
 * Displays URL links of the songs to play.
 * @param param0 - Links(Song URL)
 * @returns - A list of URLs that a song has.
 */
export function Links({ links }: LinksProps) {
    // A map list of song platforms.(To add more)
    const platform: { [label: string]: keyof songLinks } = {
        Spotify: "spotify",
        "Apple Music": "apple",
        "SoundCloud": "soundcloud",
        Amazon: "amazon",
        Youtube: "youtube",
    }
    const platforms = Object.keys(platform)
    //Using my hook
     const { selectedItem, setSelectedItem } = useSortFilter("Spotify")

    return(
    <>
    <div className="song-media">
        <ul className="song-links">
            {platforms.map((label) => {
                // display url from platform list.
                const key = platform[label]
                const url = links?.[key]
                if (!url)
                    return null
                return (
                    <li key ={label}>
                        <a href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={selectedItem === label ? "active" : ""}
                        onMouseDown={() => setSelectedItem(label)}
                        >
                        {label}
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
    </>
    )
}