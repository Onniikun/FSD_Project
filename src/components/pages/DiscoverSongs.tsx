import SongItem from "../common/songs/song-items/SongItem"
import { MoodSelector } from "../common/mood-selector/MoodSelector"


function DiscoverSongs({ mood }: { mood: string }) {
    return(
        <>
        <SongItem />
            <MoodSelector
                mood={mood}
                setMood={() => {}}
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