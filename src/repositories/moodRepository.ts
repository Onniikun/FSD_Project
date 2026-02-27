let currentMood: string | null = null;

// Simple in-memory repository to store the current mood value.
export const moodRepository = {
    getMood() {
        return currentMood;
    },
    setMood(newMood: string) {
        currentMood = newMood;
    }
};