-- CreateTable
CREATE TABLE "Songlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "description" TEXT,
    "cover" TEXT,

    CONSTRAINT "Songlist_pkey" PRIMARY KEY ("id")
);
