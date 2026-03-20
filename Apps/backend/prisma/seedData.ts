import { SongItem } from "../../backend/src/generated/prisma/client";
 
const songPFP = "songPFP.png";
 
export const songs: SongItem[] = [
  {
    id: 1,
    title: "Forever &",
    releaseDate: new Date("July 12, 2024"),
    runtime: "2:27",
    cover: songPFP,
  },
  {
    id: 2,
    title: "Karma",
    releaseDate: new Date("October 19, 2018"),
    runtime: "3:08",
    cover: songPFP,
  },
  {
    id: 3,
    title: "More than a friend?",
    releaseDate: new Date("March 1, 2025"),
    runtime: "3:08",
    cover: songPFP,
  },
  {
    id: 4,
    title: "TWENTIES",
    releaseDate: new Date("February 7, 2025"),
    runtime: "2:51",
    cover: songPFP,
  },
  {
    id: 5,
    title: "Let You Break My Heart Again",
    releaseDate: new Date("August 13, 2021"),
    runtime: "4:29",
    cover: songPFP,
  },
  {
    id: 6,
    title: "Let Down",
    releaseDate: new Date("September 6, 1997"),
    runtime: "4:59",
    cover: songPFP,
  },
  {
    id: 7,
    title: "Sugarcoat (NATTY Solo)",
    releaseDate: new Date("July 5, 2023"),
    runtime: "2:59",
    cover: songPFP,
  },
  {
    id: 8,
    title: "Bando - sped up + reverb",
    releaseDate: new Date("2019"),
    runtime: "2:45",
    cover: songPFP,
  },
  {
    id: 9,
    title: "How (Feat. Roddy Ricch)",
    releaseDate: new Date("May 6, 2022"),
    runtime: "3:38",
    cover: songPFP,
  },
  {
    id: 10,
    title: "ANTISOCIAL",
    releaseDate: new Date("January 30, 2026"),
    runtime: "2:55",
    cover: songPFP,
  },
];