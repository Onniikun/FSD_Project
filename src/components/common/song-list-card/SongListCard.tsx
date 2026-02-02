import "./song-list-card.css";
import type { SongList } from "../../../types/songListTypes";

export interface SongListCardProps {
  list: SongList;
  isExpanded: boolean;
  onTitleClick: (id: string) => void;
  onDelete: (id: string) => void;
}

export function SongListCard({
  list,
  isExpanded,
  onTitleClick,
  onDelete
}: SongListCardProps) {
  return (
    <div className="songlist-card">
      <div className="card-header">
        <h3 onClick={() => onTitleClick(list.id)}>
          {list.name}
        </h3>
        <button
          className="delete-list-button"
          onClick={() => onDelete(list.id)}
        >
          Delete
        </button>

      </div>

      {isExpanded && (
        <div className="song-grid">
          {/* Header Row */}
          <div className="song-grid-header">
            <span>Song Title</span>
            <span>Artist</span>
            <span>Album</span>
            <span>Date Added</span>
            <span>Runtime</span>
          </div>

          {/* Song Rows */}
          {list.songs.map((song) => (
            <div key={song.id} className="song-grid-row">
              <span>{song.title}</span>
              <span>{song.artist}</span>
              <span>{song.album ?? "-"}</span>
              <span>{song.releasedDate ?? "-"}</span>
              <span>{song.runtime ?? "-"}</span>
            </div>
          ))}
        </div>

      )}
    </div>
  );
}