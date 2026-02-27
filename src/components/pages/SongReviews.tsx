import { useMood } from "../../hooks/useMood";
import { MoodSelector } from "../common/mood-selector/MoodSelector";
import Review from "../common/reviews/Review";

export default function SongReviews() {
    const { mood } = useMood();

    return (
        <>
            <MoodSelector
                showButtons={false}
                message={
                mood
                    ? `Write a review that matches your ${mood} mood!`
                    : "Choose a mood on the landing page to personalize your message."
                }
            />

            <main>
                <Review />
            </main>

        </>

    );
};