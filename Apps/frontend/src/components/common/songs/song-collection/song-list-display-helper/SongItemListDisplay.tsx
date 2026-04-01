import "./song-item-list-display.css";
import type { FullSonglist } from "../../../../../../../../shared/types/songListTypes";
import { SongItemListCard } from "./SongItemListCard";

/**
 * Display Song lists to add/remove a song from.
 */
export default function SongItemListsDisplay({
  lists,
  songId,
  onToggle
}: {
  lists: FullSonglist[];
  songId: number;
  onToggle: (listId: string, songId: number) => void;
}) {
  return (
    <div className="model">
      <h2 className="title">All Song Lists</h2>

      {lists.length === 0 && <p>No lists created yet.</p>}

      <div className="modal-item-display">
        {lists.map(list => {
          const isInList = list.songs?.some(song => song.id === songId);

          return (
            <SongItemListCard
              key={list.id}
              list={list}
              isInList={isInList}
              onToggle={() => onToggle(list.id, songId)}
            />
          );
        })}
      </div>
    </div>
  );
}