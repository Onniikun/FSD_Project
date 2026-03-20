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
  // Clear tables in correct order
  await prisma.songCollection.deleteMany();
  await prisma.songItem.deleteMany();
  await prisma.songlist.deleteMany();

  // Insert songs
  await prisma.songItem.createMany({
    data: songs,
    skipDuplicates: true
  });

  const createdSongs = await prisma.songItem.findMany();
  console.log(`CREATED SONGS: ${createdSongs.length}`);

  // Insert songlists
  await prisma.songlist.createMany({
    data: songlistSeedData,
    skipDuplicates: true
  });

  const createdSongLists = await prisma.songlist.findMany();
  console.log(`CREATED SONGLISTS: ${createdSongLists.length}`);

  // Create join table entries (2 random songs per list)
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

  console.log("CONNECTED SONGS TO SONGLISTS (via SongCollection)");
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