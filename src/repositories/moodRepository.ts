let currentMood: string | null = null;

export const moodRepository = {
    getMood() {
        return currentMood;
    },
    setMood(newMood: string) {
        currentMood = newMood;
    }
};