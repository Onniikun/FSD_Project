import { useState } from "react";
import CreateSongListForm from "../common/create-song-list-form/CreateSongListForm";
import SongListsDisplay from "../common/song-list-display/SongListsDisplay";
import type { SongList } from "../../types/songListTypes";


export default function SongListsPage() {
    const [lists, setLists] = useState<SongList[]>([]);

    return (
        <div>
          <h1>Song Lists</h1>

          <CreateSongListForm setLists={setLists} />

          <SongListsDisplay lists={lists} />
        </div>
    );
}

