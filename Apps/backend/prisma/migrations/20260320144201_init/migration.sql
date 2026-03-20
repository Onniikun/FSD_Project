-- CreateTable
CREATE TABLE "SongList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "description" TEXT,
    "cover" TEXT,

    CONSTRAINT "SongList_pkey" PRIMARY KEY ("id")
);
