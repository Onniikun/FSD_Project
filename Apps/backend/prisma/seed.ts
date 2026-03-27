import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
 
import { songlistSeedData, songs } from "./seedData";
 
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
 
async function main() {
  console.log("Seeding database");
  await prisma.songCollection.deleteMany();
  await prisma.songGenre.deleteMany();
  await prisma.songArtist.deleteMany();
  await prisma.link.deleteMany();
  await prisma.songItem.deleteMany();
  await prisma.songlist.deleteMany();
  await prisma.artist.deleteMany();
  await prisma.genre.deleteMany();
 
  const uniqueArtists = Array.from(
    new Set(songs.flatMap((s) => s.artists))
  ).map((name) => ({ name }));
 
  const uniqueGenres = Array.from(
    new Set(songs.flatMap((s) => s.genres))
  ).map((name) => ({ name }));
 
  await prisma.artist.createMany({ data: uniqueArtists });
  await prisma.genre.createMany({ data: uniqueGenres });
 
  const artists = await prisma.artist.findMany();
  const genres = await prisma.genre.findMany();
 
  console.log(`ARTISTS: ${artists.length}, GENRES: ${genres.length}`);
 
  await prisma.songItem.createMany({
    data: songs.map(({ artists, genres, links, ...song }) => song),
    skipDuplicates: true
  });
 
  const createdSongs = await prisma.songItem.findMany();
  console.log(`SONGS: ${createdSongs.length}`);
 
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const createdSong = createdSongs[i];
 
    await prisma.link.createMany({
      data: song.links.map((link) => ({
        songItemId: createdSong.id,
        platform: link.platform,
        url: link.url
      }))
    });
  }
 
  console.log("LINKS inserted");
 
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const createdSong = createdSongs[i];
 
    for (const artistName of song.artists) {
      const artist = artists.find((a) => a.name === artistName);
      if (!artist) continue;
 
      await prisma.songArtist.create({
        data: {
          songItemId: createdSong.id,
          artistId: artist.id
        }
      });
    }
  }
 
  console.log("SONG <-> ARTIST relations inserted");
 
  for (let i = 0; i < songs.length; i++) {
    const song = songs[i];
    const createdSong = createdSongs[i];
 
    for (const genreName of song.genres) {
      const genre = genres.find((g) => g.name === genreName);
      if (!genre) continue;
 
      await prisma.songGenre.create({
        data: {
          songItemId: createdSong.id,
          genreId: genre.id
        }
      });
    }
  }
 
  console.log("SONG <-> GENRE relations inserted");

  await prisma.songlist.createMany({
    data: songlistSeedData,
    skipDuplicates: true
  });
 
  const createdSongLists = await prisma.songlist.findMany();
  console.log(`SONGLISTS: ${createdSongLists.length}`);
 

  for (const list of createdSongLists) {
    const randomSongs = pickRandom(createdSongs, 2);
 
    await prisma.songCollection.createMany({
      data: randomSongs.map((song) => ({
        songId: song.id,
        songlistId: list.id
      })),
      skipDuplicates: true
    });
  }
 
  console.log("SONG COLLECTIONS inserted");
}
 
function pickRandom(arr, count) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}
 
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });