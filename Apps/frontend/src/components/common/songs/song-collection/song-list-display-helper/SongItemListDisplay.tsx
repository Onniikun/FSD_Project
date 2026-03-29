import "./song-item-list-display.css"
import type { SongList } from "../../../../../../../../shared/types/songListTypes";
import { SongItemListCard } from "../song-list-display-helper/SongItemListCard"

export default function SongItemListsDisplay({
  lists,
  onSelectList
}: {
  lists: SongList[];
  onSelectList: (list: SongList) => void;
}) {
  console.log("Song Item lists:", lists)
  return (
    <div className="lists-display">
      <h2>All Song Lists</h2>

      {lists.length === 0 && <p>No lists created yet.</p>}

      {lists.map(list => (
        <SongItemListCard
          key={list.id}
          list={list}
          onSelect={() => onSelectList(list)}
        />
      ))}
    </div>
  );
}