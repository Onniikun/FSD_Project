import SongItem from "../common/songs/song-items/SongItem"
import { MoodSelector } from "../common/mood-selector/MoodSelector"
import { useMood } from "../../hooks/useMood";


function DiscoverSongs() {
    const { mood } = useMood();

    return(
        <>
        <SongItem />
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