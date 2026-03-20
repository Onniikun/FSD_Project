import { SongItem } from "../../backend/src/generated/prisma/client"

const songPFP = "songPFP.png"

export const songs: SongItem [] = [
    {
        SongItem_ID: 1,
        Title: "Forever &",
        Release_date: new Date("July 12, 2024"),
        Runtime: "2:27",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "Karma",
        Release_date: new Date("October 19, 2018"),
        Runtime: "3:08",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "More than a friend?",
        Release_date: new Date("March 1, 2025"),
        Runtime: "3:08",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "TWENTIES",
        Release_date: new Date("February 7, 2025"),
        Runtime: "2:51",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "Let You Break My Heart Again",
        Release_date: new Date("August 13, 2021"),
        Runtime: "4:29",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "Let Down",
        Release_date: new Date("September 6, 1997"),
        Runtime: "4:59",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "Sugarcoat(NATTY Solo)",
        Release_date: new Date("July 5, 2023"),
        Runtime: "2:59",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "Bando - sped up + reverb",
        Release_date: new Date("2019"),
        Runtime: "2:45",
        Cover: songPFP,
    },
    {
        SongItem_ID: 1,
        Title: "How (Feat. Roddy Ricch)",
        Release_date: new Date("May 6, 2022"),
        Runtime: "3:38",
        Cover: songPFP,
    },
    {
        SongItem_ID: 10,
        Title: "ANTISOCIAL",
        Release_date: new Date("January 30, 2026"),
        Runtime: "2:55",
        Cover: songPFP,
    }
];