import { useState } from "react";
import CreateSongListForm from "../common/create-song-list-form/CreateSongListForm";
import SongListsDisplay from "../common/song-list-display/SongListsDisplay";
import type { SongList } from "../../types/songListTypes";
import { MoodSelector } from "../common/mood-selector/MoodSelector";
import { useMood } from "../../hooks/useMood";


export default function SongListsPage() {
    const [lists, setLists] = useState<SongList[]>([]);
    const { mood } = useMood();

    return (
        <>
            <div>
                <h1>Song Lists</h1>

                <CreateSongListForm setLists={setLists} />

                <SongListsDisplay lists={lists} setLists={setLists} />
            </div>
            <MoodSelector
                showButtons={false}
                message={
                    mood
                    ? `Create a list that matches your ${mood} mood!`
                    : "Choose a mood on the landing page to personalize your message."
                }
            />
        </>            
    );
}

