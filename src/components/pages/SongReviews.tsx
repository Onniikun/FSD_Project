import { MoodSelector } from "../common/mood-selector/MoodSelector";
import Review from "../common/reviews/Review";

export default function SongReviews({ mood }: { mood: string }) {
    return (
        <>
            <MoodSelector
                mood={mood}
                setMood={() => {}}
                showButtons={false}
                message={
                mood
                    ? `Write a review that matches your ${mood} mood`
                    : "Choose a mood on the landing page to personalize your message."
                }
            />

            <main>
                <Review />
            </main>

        </>

    );
};