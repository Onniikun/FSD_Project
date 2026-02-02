import { useState } from "react";
import './song-list-display.css';
import type { SongList } from "../../../types/songListTypes";
import { SongListCard } from "../song-list-card/SongListCard";

export interface SongListsDisplayProps {
  lists: SongList[];
  setLists: React.Dispatch<React.SetStateAction<SongList[]>>;
}

export default function SongListsDisplay({ lists, setLists }: SongListsDisplayProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleTitleClick = (id: string) => {
        setExpandedId((previousId) => (previousId === id ? null : id));
    };

    const handleDeleteList = (id: string) => {
        // Simple browser delete confirmation for now
        const confirmed = window.confirm("Are you sure you want to delete this list?");
        if (!confirmed) return;

        setLists((previousLists) => previousLists.filter((list) => list.id !== id));
    };


    return (
        <div className="lists-display">
          <h2>All Song Lists</h2>

          {lists.length === 0 && <p>No lists created yet.</p>}

          {lists.map((list) => (
            <SongListCard
              key={list.id}
              list={list}
              isExpanded={expandedId === list.id}
              onTitleClick={handleTitleClick}
              onDelete={handleDeleteList}
            />
          ))}
        </div>
    );
};