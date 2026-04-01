import "./song-list-card.css";
import type { FullSonglist } from "../../../../../../shared/types/songListTypes";
import defaultCover from "../../../assets/default-cover.png";

export function SongListCard({
  list,
  onSelect
}: {
  list: FullSonglist;
  onSelect: () => void;
}) {
  return (
    <div className="songlist-card" onClick={onSelect}>
      <div className="card-collapsed">
        <img 
          src={list.cover ?? defaultCover} 
          className="list-cover" 
          alt={list.name} 
        />
        <h3 className="list-title">{list.name}</h3>
      </div>
    </div>
  );
}
