import "./song-list-card.css";
import type { SongList } from "../../../types/songListTypes";

export interface SongListCardProps {
  list: SongList;
}

export function SongListCard({
  list,
}: SongListCardProps) {
  return (
    <div className="songlist-card">
      <div className="card-collapsed">
        <img 
          src={list.cover} 
          className="list-cover" 
          alt={list.name}
        />
        <h3 className="list-title">{list.name}</h3>
      </div>
    </div>
  );
}
