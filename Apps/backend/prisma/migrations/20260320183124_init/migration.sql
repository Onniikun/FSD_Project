-- CreateTable
CREATE TABLE "Songlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "description" TEXT,
    "cover" TEXT,

    CONSTRAINT "Songlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongCollection" (
    "id" SERIAL NOT NULL,
    "songId" INTEGER NOT NULL,
    "songlistId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SongCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongItem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3),
    "runtime" TEXT,
    "cover" TEXT,

    CONSTRAINT "SongItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "songItemId" INTEGER NOT NULL,
    "platform" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongArtist" (
    "songItemId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "SongArtist_pkey" PRIMARY KEY ("songItemId","artistId")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SongGenre" (
    "songItemId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "SongGenre_pkey" PRIMARY KEY ("songItemId","genreId")
);

-- CreateIndex
CREATE UNIQUE INDEX "SongCollection_songId_songlistId_key" ON "SongCollection"("songId", "songlistId");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_name_key" ON "Artist"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- AddForeignKey
ALTER TABLE "SongCollection" ADD CONSTRAINT "SongCollection_songId_fkey" FOREIGN KEY ("songId") REFERENCES "SongItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongCollection" ADD CONSTRAINT "SongCollection_songlistId_fkey" FOREIGN KEY ("songlistId") REFERENCES "Songlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_songItemId_fkey" FOREIGN KEY ("songItemId") REFERENCES "SongItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongArtist" ADD CONSTRAINT "SongArtist_songItemId_fkey" FOREIGN KEY ("songItemId") REFERENCES "SongItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongArtist" ADD CONSTRAINT "SongArtist_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongGenre" ADD CONSTRAINT "SongGenre_songItemId_fkey" FOREIGN KEY ("songItemId") REFERENCES "SongItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SongGenre" ADD CONSTRAINT "SongGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
