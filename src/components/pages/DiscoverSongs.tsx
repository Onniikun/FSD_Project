import { SongItem } from "../common/songs/song-items/SongItem"
import { MoodSelector } from "../common/mood-selector/MoodSelector"
import { useMood } from "../../hooks/useMood";
// documentation for useSearchParams: https://reactrouter.com/api/hooks/useSearchParams
import { useSearchParams } from "react-router-dom";

function DiscoverSongs() {
    const { mood } = useMood();
    const [params] = useSearchParams();
    const query = params.get("query") ?? "";

    return(
        <>
        <SongItem query={query} />
            <MoodSelector
                showButtons={false}
                message={
                mood
                    ? `Discover songs that match your ${mood} mood!`
                    : "Choose a mood on the landing page to personalize your message."
                }
            />
        </>
    )
}

export default DiscoverSongs