-- CreateTable
CREATE TABLE "SongItem" (
    "SongItem_ID" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Release_date" TIMESTAMP(3),
    "Runtime" TEXT,
    "Cover" TEXT,

    CONSTRAINT "SongItem_pkey" PRIMARY KEY ("SongItem_ID")
);

-- CreateTable
CREATE TABLE "Links" (
    "Links_ID" SERIAL NOT NULL,
    "SongItem_ID" INTEGER NOT NULL,
    "Platform" TEXT NOT NULL,
    "URL" TEXT NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("Links_ID")
);

-- CreateTable
CREATE TABLE "Song_artist" (
    "SongItem_ID" INTEGER NOT NULL,
    "Artist_ID" INTEGER NOT NULL,

    CONSTRAINT "Song_artist_pkey" PRIMARY KEY ("SongItem_ID","Artist_ID")
);

-- CreateTable
CREATE TABLE "Artist" (
    "Artist_ID" SERIAL NOT NULL,
    "Artist_name" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("Artist_ID")
);

-- CreateTable
CREATE TABLE "Genre" (
    "Genre_ID" SERIAL NOT NULL,
    "Genre_name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("Genre_ID")
);

-- CreateTable
CREATE TABLE "Song_genre" (
    "SongItem_ID" INTEGER NOT NULL,
    "Genre_ID" INTEGER NOT NULL,

    CONSTRAINT "Song_genre_pkey" PRIMARY KEY ("SongItem_ID","Genre_ID")
);

-- AddForeignKey
ALTER TABLE "Links" ADD CONSTRAINT "Links_SongItem_ID_fkey" FOREIGN KEY ("SongItem_ID") REFERENCES "SongItem"("SongItem_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song_artist" ADD CONSTRAINT "Song_artist_SongItem_ID_fkey" FOREIGN KEY ("SongItem_ID") REFERENCES "SongItem"("SongItem_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song_artist" ADD CONSTRAINT "Song_artist_Artist_ID_fkey" FOREIGN KEY ("Artist_ID") REFERENCES "Artist"("Artist_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song_genre" ADD CONSTRAINT "Song_genre_SongItem_ID_fkey" FOREIGN KEY ("SongItem_ID") REFERENCES "SongItem"("SongItem_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song_genre" ADD CONSTRAINT "Song_genre_Genre_ID_fkey" FOREIGN KEY ("Genre_ID") REFERENCES "Genre"("Genre_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
