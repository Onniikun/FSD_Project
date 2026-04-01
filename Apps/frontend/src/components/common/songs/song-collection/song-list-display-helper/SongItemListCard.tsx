import "./song-item-list-card.css";
import type { FullSonglist } from "../../../../../../../backend/src/shared/types/songListTypes";
import defaultCover from "../../../../../assets/default-cover.png";

export function SongItemListCard({
  list,
  isInList,
  onToggle
}: {
  list: FullSonglist;
  isInList: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="songitemlist-card" onClick={onToggle}>
      <img
        src={list.cover ?? defaultCover}
        className="song-item-list-cover"
        alt={list.name}
      />

      <h3 className="song-item-list-title">{list.name}</h3>

      <button
        className={`toggle-circle ${isInList ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
      >
        {isInList ? "✔" : "+"}
      </button>
    </div>
  );
}