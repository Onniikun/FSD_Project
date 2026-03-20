import { SongItem, Songlist } from "@prisma/client";

 
const songPFP = "songPFP.png";

export const songlistSeedData: Omit<Songlist, "id" | "songs">[] = [
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
 
export const songs:  Omit<SongItem, "links" | "artists" | "genres" | "songlists">[] = [
  {
    title: "Forever &",
    releaseDate: new Date("July 12, 2024"),
    runtime: "2:27",
    cover: songPFP,
  },
  {
    title: "Karma",
    releaseDate: new Date("October 19, 2018"),
    runtime: "3:08",
    cover: songPFP,
  },
  {
    title: "More than a friend?",
    releaseDate: new Date("March 1, 2025"),
    runtime: "3:08",
    cover: songPFP,
  },
  {
    title: "TWENTIES",
    releaseDate: new Date("February 7, 2025"),
    runtime: "2:51",
    cover: songPFP,
  },
  {
    title: "Let You Break My Heart Again",
    releaseDate: new Date("August 13, 2021"),
    runtime: "4:29",
    cover: songPFP,
  },
  {
    title: "Let Down",
    releaseDate: new Date("September 6, 1997"),
    runtime: "4:59",
    cover: songPFP,
  },
  {
    title: "Sugarcoat (NATTY Solo)",
    releaseDate: new Date("July 5, 2023"),
    runtime: "2:59",
    cover: songPFP,
  },
  {
    title: "Bando - sped up + reverb",
    releaseDate: new Date("2019"),
    runtime: "2:45",
    cover: songPFP,
  },
  {
    title: "How (Feat. Roddy Ricch)",
    releaseDate: new Date("May 6, 2022"),
    runtime: "3:38",
    cover: songPFP,
  },
  {
    title: "ANTISOCIAL",
    releaseDate: new Date("January 30, 2026"),
    runtime: "2:55",
    cover: songPFP,
  },
];