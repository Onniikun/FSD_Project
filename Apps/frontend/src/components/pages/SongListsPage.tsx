import { useEffect, useState } from "react";
import CreateSongListForm from "../common/create-song-list-form/CreateSongListForm";
import SongListsDisplay from "../common/song-list-display/SongListsDisplay";
import { MoodSelector } from "../common/mood-selector/MoodSelector";
import { useMood } from "../../hooks/useMood";

import type { CreateSongListData, FullSonglist } from "../../../../../shared/types/songListTypes";
import {
  fetchSongLists,
  getSongListById,
  createSongList,
  deleteSongList,
} from "../../apis/songListsRepository";

import { SongListModal } from "../common/song-list-modal/SongListModal";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";

export default function SongListsPage() {
    const {getToken, isSignedIn} = useAuth();
    const [lists, setLists] = useState<FullSonglist[]>([]);
    const [selectedList, setSelectedList] = useState<FullSonglist | null>(null);
    const { mood } = useMood();

    useEffect(() => {
        async function load() {
            const sessionToken = await getToken();
            const loaded = await fetchSongLists(sessionToken);
            setLists(loaded);
        }
        load();
    }, []);

    const handleSelectList = async (id: string) => {
        const sessionToken = await getToken();
        const latestSonglist = await getSongListById(id, sessionToken);
        setSelectedList(latestSonglist);
    };

    const handleCreateList = async (data: CreateSongListData): Promise<void> => {
        let sessionToken = isSignedIn? await getToken() : null;
        const newList = await createSongList(data, sessionToken);
        setLists(prev => [...prev, newList]);
    };

    const handleDeleteList = async (id: string): Promise<void> => {
        let sessionToken = isSignedIn? await getToken() : null;
        await deleteSongList(id, sessionToken);
        setLists(prev => prev.filter(list => list.id !== id));
        setSelectedList(null);
    };

    const handleUpdateList = async (updated: FullSonglist): Promise<void> => {
        setLists(prev =>
            prev.map(list => (list.id === updated.id ? updated : list))
        );

        setSelectedList(updated);
    };


    return (
        <>
        <div>
            <h1>Song Lists</h1>

            <SignedIn>
                <CreateSongListForm onCreateList={handleCreateList} />
            </SignedIn>
            <SignedOut>
                <p>Please sign in or create an account to create a song list.</p>
            </SignedOut>

            <SongListsDisplay
            lists={lists}
            onSelectList={(list) => handleSelectList(list.id)}
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
