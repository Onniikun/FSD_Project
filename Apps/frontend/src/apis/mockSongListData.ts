import type { SongListRecord } from "../../../../shared/types/songListRecord";

export const songListData: SongListRecord[] = [
    {
        id: "list-1",
        name: "Top Picks",
        visibility: "public",
        description: "A curated selection of standout tracks.",
        songIds: [1, 2, 3, 4]
    },
    {
        id: "list-2",
        name: "Chill & Soft Vibes",
        visibility: "public",
        description: "Soft, emotional, and relaxing tracks for late nights.",
        songIds: [3, 4, 5, 8]
    },
    {
        id: "list-3",
        name: "R&B Essentials",
        visibility: "private",
        description: "A mix of modern and classic R&B tracks.",
        songIds: [1, 2, 9, 10]
    },
    {
        id: "list-4",
        name: "Morning Boost",
        visibility: "public",
        description: "Energetic tracks to start the day with momentum.",
        songIds: [1, 4, 7, 10]
    },
    {
        id: "list-5",
        name: "Late Night Drive",
        visibility: "private",
        description: "Atmospheric songs perfect for long, reflective drives.",
        songIds: [3, 4, 6, 9]
    },
    {
        id: "list-6",
        name: "Study & Focus",
        visibility: "public",
        description: "Calm, steady tracks designed to help maintain focus.",
        songIds: [5, 6, 8]
    },
    {
        id: "list-7",
        name: "Feel-Good Mix",
        visibility: "public",
        description: "Uplifting songs to brighten your mood.",
        songIds: [1, 3, 7, 9]
    },
    {
        id: "list-8",
        name: "Slow & Soulful",
        visibility: "private",
        description: "Smooth, emotional tracks for quiet evenings.",
        songIds: [2, 4, 5]
    },
    {
        id: "list-9",
        name: "Workout Energy",
        visibility: "public",
        description: "High-intensity songs to keep the energy up.",
        songIds: [7, 8, 10]
    },
    {
        id: "list-10",
        name: "Weekend Chill",
        visibility: "private",
        description: "Relaxed tracks for unwinding on the weekend.",
        songIds: [3, 5, 8]
    }

];