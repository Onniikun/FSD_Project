import { useSyncExternalStore } from "react";
import { moodService } from "../services/moodService";

// Internal list of listeners that will be notified when the mood value changes.
let listeners: (() => void)[] = [];

// Allows components to subscribe to mood changes and receive updates when the mood value changes.
function subscribe(callback: () => void) {
    listeners.push(callback);

    return () => {
        listeners = listeners.filter((listener) => listener !== callback);
    };
};

// Notifies all subscribed components that the mood value has changed.
function emitChange() {
    listeners.forEach((listener) => listener());
};

// Custom hook to manage mood state across the app using useSyncExternalStore for efficient updates.
export function useMood() {
    const mood = useSyncExternalStore(
        subscribe,
        () => moodService.getMood()
    );
    // Updates the mood value in the service and notifies all subscribed components of the change.
    const setMood = (newMood: string) => {
        moodService.setMood(newMood);
        emitChange();
    };

    return {
        mood,
        setMood,
        allowedMoods: moodService.getMoods()
    };
};