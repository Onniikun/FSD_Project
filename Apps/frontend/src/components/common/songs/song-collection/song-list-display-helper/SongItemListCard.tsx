import "./song-item-list-card.css";
import type { SongList } from "../../../../../../../../shared/types/songListTypes";
import defaultCover from "../../../../../assets/default-cover.png"

/**
 * Displays a singlar song list to add to collection from a song item.
 * @param param0 - Song list collection.
 * @returns - A singlar Song list item.
 */
export function SongItemListCard({
  list,
  onSelect
}: {
  list: SongList;
  onSelect: () => void;
}) {
  return (
    <div className="songitemlist-card" onClick={onSelect}>
        <img 
          src={list.cover ?? defaultCover} 
          className="song-item-list-cover" 
          alt={list.name} 
        />
        <h3 className="list-title">{list.name}</h3>
    </div>
  );
}
