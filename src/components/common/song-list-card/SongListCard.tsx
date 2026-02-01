import type { SongList } from "../../../types/songListTypes";

export interface SongListCardProps {
  list: SongList;
  isExpanded: boolean;
  onTitleClick: (id: string) => void;
}

export function SongListCard({
  list,
  isExpanded,
  onTitleClick
}: SongListCardProps) {
  return (
    <div className="songlist-card">
      <div className="card-header">
        <h3 onClick={() => onTitleClick(list.id)}>
          {list.name}
        </h3>
      </div>

      {isExpanded && (
        <ul className="song-list">
          {list.songs.map((song) => (
            <li key={song.id}>
              {song.title} — {song.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}