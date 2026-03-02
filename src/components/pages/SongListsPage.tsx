import { useEffect, useState } from "react";
import CreateSongListForm from "../common/create-song-list-form/CreateSongListForm";
import SongListsDisplay from "../common/song-list-display/SongListsDisplay";
import { MoodSelector } from "../common/mood-selector/MoodSelector";
import { useMood } from "../../hooks/useMood";

import type { CreateSongListData, SongList } from "../../types/songListTypes";
import {
  fetchSongLists,
  createSongList,
  deleteSongList,
  updateSongList
} from "../../apis/songListsRepository";

import { SongListModal } from "../common/song-list-modal/SongListModal";

export default function SongListsPage() {
    const [lists, setLists] = useState<SongList[]>([]);
    const [selectedList, setSelectedList] = useState<SongList | null>(null);
    const { mood } = useMood();

    useEffect(() => {
        const loaded = fetchSongLists();
        setLists(loaded);
    }, []);

    const handleCreateList = async (data: CreateSongListData) => {
        const newList = await createSongList(data);
        setLists(prev => [...prev, newList]);
    };

    const handleDeleteList = async (id: string) => {
        await deleteSongList(id);
        setLists(prev => prev.filter(list => list.id !== id));
        setSelectedList(null);
    };

    const handleUpdateList = async (updated: SongList) => {
        const updatedRecord = {
        id: updated.id,
        name: updated.name,
        description: updated.description,
        visibility: updated.visibility,
        songIds: updated.songs.map(s => s.id)
        };

        const saved = await updateSongList(updatedRecord);

        setLists(prev =>
        prev.map(list => (list.id === saved.id ? saved : list))
        );

        setSelectedList(saved);
    };

    return (
        <>
        <div>
            <h1>Song Lists</h1>

            <CreateSongListForm onCreateList={handleCreateList} />

            <SongListsDisplay
            lists={lists}
            onSelectList={setSelectedList}
            />
        </div>

        {selectedList && (
            <SongListModal
            list={selectedList}
            onClose={() => setSelectedList(null)}
            onDelete={handleDeleteList}
            onEdit={handleUpdateList}
            />
        )}

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
