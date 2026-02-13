import "./song-links.css"
import type { songLinks } from "../../../../types/songModel.ts"
import { useSortFilter } from "../../../hooks/useSortAndFilterUI"

type LinksProps = {
    links?: songLinks
}
/**
 * 
 * @param param0 
 * @returns 
 */
function Links({ links }: LinksProps) {
    const platform: { [label: string]: keyof songLinks } = {
        Spotify: "spotify",
        "Apple Music": "apple",
        "SoundCloud": "soundcloud",
        Amazon: "amazon",
        Youtube: "youtube",
    }
    const { items: platforms, selectedItem, setSelectedItem } = useSortFilter(Object.keys(platform),"Spotify")

    return(
    <>
    <div className="song-media">
        <ul className="song-links">
            {platforms.map((label) => {
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
                        onClick={() => setSelectedItem(label)}
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

export default Links