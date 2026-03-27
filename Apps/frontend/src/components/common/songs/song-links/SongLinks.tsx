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
 * Displays clickable platform links for a song.
 */
export function Links({ links }: LinksProps) {
  const { selectedItem, setSelectedItem } = useSortFilter("Spotify")

  // Prevent render if no links
  if (!links || links.length === 0) return null

  return (
    <div className="song-media">
      <ul className="song-links">
        {links.map((link) => {
          // skip if no URL (extra safety)
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