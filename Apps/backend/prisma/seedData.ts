import { SongList } from "@prisma/client";

export const songlistSeedData: Omit<SongList, "id" | "songs">[] = [
  {
    name: "Chill Vibes",
    visibility: "public",
    description: "Relaxing tracks for studying or unwinding.",
    cover: null
  },
  {
    name: "Workout Mix",
    visibility: "private",
    description: "High-energy songs to keep you moving.",
    cover: null
  },
  {
    name: "Throwback Classics",
    visibility: "public",
    description: "Hits from the 80s, 90s, and early 2000s.",
    cover: null
  },
  {
    name: "Late Night Coding",
    visibility: "private",
    description: "Ambient and electronic tracks for deep focus.",
    cover: null
  },
  {
    name: "Road Trip Essentials",
    visibility: "public",
    description: "Feel-good songs perfect for long drives.",
    cover: null
  },
  {
    name: "Morning Boost",
    visibility: "public",
    description: "Upbeat tracks to kickstart your day with energy.",
    cover: null
  },
  {
    name: "Indie Discoveries",
    visibility: "private",
    description: "A curated collection of underrated indie gems.",
    cover: null
  },
  {
    name: "Lo-Fi Study Session",
    visibility: "public",
    description: "Soft lo-fi beats perfect for focus and deep work.",
    cover: null
  },
  {
    name: "Global Hits",
    visibility: "public",
    description: "A mix of chart-topping songs from around the world.",
    cover: null
  },
  {
    name: "Acoustic Evenings",
    visibility: "private",
    description: "Warm acoustic tracks for slow nights and quiet moments.",
    cover: null
  }
];