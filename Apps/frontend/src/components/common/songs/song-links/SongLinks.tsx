import "./song-links.css"
import { useSortFilter } from "../../../../hooks/useSortAndFilterUI.ts"

type LinkItem = {
  id: number
  songItemId: number
  platform: string
  url: string
}

type LinksProps = {
  links?: LinkItem[]
}

/**
 * Displays the available platform URL links of the songs to play.
 * @param param0 - Links(Song URL)
 * @returns - A list of URLs that a song has.
 */
export function Links({ links }: LinksProps) {
    /**
     * This hook only renders the button selection of the platform for UI.
     * It does not have any functionally of selected rendering but rather a UI state change.
     * 
     * Note: Clicking the button will redirect the user to that link.
     * 
     * This hook is my useSortAndFilter hook.
     */
    const { selectedItem, setSelectedItem } = useSortFilter("Spotify")

    if (!links || links.length === 0) 
    return null

return (
    <div className="song-media">
      <ul className="song-links">
        {links.map((link) => {
          if (!link.url) return null
          return (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={selectedItem === link.platform ? "active" : ""}
                onMouseDown={() => setSelectedItem(link.platform)}
              >
                {link.platform}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}