import type { SongListRecord } from "../types/songListRecord";

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
    }
];