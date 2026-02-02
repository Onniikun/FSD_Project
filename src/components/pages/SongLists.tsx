import { MoodSelector } from "../common/mood-selector/MoodSelector";

function SongLists({ mood }: { mood: string }) {
    return (
        <>
            <MoodSelector
                mood={mood}
                setMood={() => {}}
                showButtons={false}
                message={
                    mood
                    ? `Create a list that matches your ${mood} mood!`
                    : "Choose a mood on the landing page to personalize your message."
                }
            />
        <p>
            Hello World!
        </p>
        </>
    );
}

export default SongLists;