import { moodRepository } from "../repositories/moodRepository";

const moods = ["Chill", "Hyped", "Focused", "Sad", "Nostalgic", "Energetic"];

/**
 * Responsibilities:
 * - Retrieve the current mood from the repository
 * - Expose the list of moods to the rest of the app
 */
export const moodService = {
    getMood() {
        return moodRepository.getMood();
    },

    setMood(mood: string) {
        moodRepository.setMood(mood);
    },

    getMoods() {
        return moods;
    }
};