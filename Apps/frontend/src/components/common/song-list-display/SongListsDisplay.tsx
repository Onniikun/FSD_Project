import './song-list-display.css';
import type { FullSonglist } from "../../../../../../shared/types/songListTypes";
import { SongListCard } from "../song-list-card/SongListCard";

export default function SongListsDisplay({
  lists,
  songId,
  onToggle
}: {
  lists: FullSonglist[];
  songId: number;
  onToggle: (listId: string, songId: number) => void;
}) {
  return (
    <div className="lists-display">
      <h2>All Song Lists</h2>

      {lists.length === 0 && <p>No lists created yet.</p>}

      {lists.map(list => {
        const isInList = list.songs?.some(song => song.id === songId);

        return (
          <div key={list.id} className="songlist-row">
            <SongListCard
              list={list}
              onSelect={() => onToggle(list.id, songId)}
            />
            <button
              className={`toggle-circle ${isInList ? "active" : ""}`}
              onClick={() => onToggle(list.id, songId)}
            >
              {isInList ? "✔" : "+"}
            </button>
          </div>
        );
      })}
    </div>
  );
}