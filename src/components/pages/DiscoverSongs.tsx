import { MoodSelector } from "../common/mood-selector/MoodSelector"
import SongItem from "../common/song-items/SongItem"
import SongItem2 from "../common/song-items/SongItem2"

function DiscoverSongs({ mood }: { mood: string }) {
    return(
        <>
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

            <SongItem />
            <SongItem2/>
        </>
    )
}

export default DiscoverSongs