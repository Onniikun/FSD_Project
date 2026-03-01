import "./song-list-card.css";
import type { SongList } from "../../../types/songListTypes";

export function SongListCard({
  list,
  onSelect
}: {
  list: SongList;
  onSelect: () => void;
}) {
  return (
    <div className="songlist-card" onClick={onSelect}>
      <div className="card-collapsed">
        <img src={list.cover} className="list-cover" alt={list.name} />
        <h3 className="list-title">{list.name}</h3>
      </div>
    </div>
  );
}
