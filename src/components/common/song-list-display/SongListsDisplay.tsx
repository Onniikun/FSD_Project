import { useState } from "react";
import './SongListsDisplay.css';
import type { SongList } from "../../../types/songListTypes";
import { SongListCard } from "../song-list-card/SongListCard";

export interface SongListsDisplayProps {
  lists: SongList[];
}

export default function SongListsDisplay({ lists }: SongListsDisplayProps) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const handleTitleClick = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
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
            />
          ))}
        </div>
    );
};