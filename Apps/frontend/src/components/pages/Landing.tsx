// import { useMood } from "../../hooks/useMood";
import { MoodSelector } from "../common/mood-selector/MoodSelector";

function Landing() {
    // const { mood } = useMood();

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
                showButtons={true}
            />

        </>
    );
}

export default Landing;