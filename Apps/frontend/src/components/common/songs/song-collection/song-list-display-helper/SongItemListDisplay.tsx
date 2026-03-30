import "./song-item-list-display.css"
import type { SongList } from "../../../../../../../../shared/types/songListTypes";
import { SongItemListCard } from "../song-list-display-helper/SongItemListCard"

/**
 * 
 * @param param0 
 * @returns 
 */
export default function SongItemListsDisplay({
  lists,
  onSelectList
}: {
  lists: SongList[];
  onSelectList: (list: SongList) => void;
}) {
  console.log("Song Item lists:", lists)
  return (
    <div className="model">
      <h2 className="title">All Song Lists</h2>

      {lists.length === 0 && <p>No lists created yet.</p>}
       <div className="modal-item-display">
        {lists.map(list => (
            <SongItemListCard
            key={list.id}
            list={list}
            onSelect={() => onSelectList(list)}
            />
        ))}
        </div>
    </div>
  );
}