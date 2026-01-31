import type { MoodSelectorProps } from "../../types/mood";
import { MoodSelector } from "../common/mood-selector/MoodSelector";

function Landing({ mood, setMood }: MoodSelectorProps) {
    return (
        <>
            <header>
                <h1>Boomboxd</h1>
                <span>
                    Discover, review, and share your favorite songs! 
                    Join a community of music enthusiasts and explore new compositions.
                </span>
            </header>
            
            <MoodSelector
                mood={mood}
                setMood={setMood}
                showButtons={true}
            />

        </>
    );
}

export default Landing;