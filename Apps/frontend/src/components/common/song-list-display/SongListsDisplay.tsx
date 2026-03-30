import './song-list-display.css';
import type { FullSonglist } from "../../../../../../shared/types/songListTypes";
import { SongListCard } from "../song-list-card/SongListCard";

export default function SongListsDisplay({
  lists,
  onSelectList
}: {
  lists: FullSonglist[];
  onSelectList: (list: FullSonglist) => void;
}) {
  console.log("Song lists:", lists)
  return (
    <div className="lists-display">
      <h2>All Song Lists</h2>

      {lists.length === 0 && <p>No lists created yet.</p>}

      {lists.map(list => (
        <SongListCard
          key={list.id}
          list={list}
          onSelect={() => onSelectList(list)}
        />
      ))}
    </div>
  );
}