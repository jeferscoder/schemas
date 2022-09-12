-- CreateTable
CREATE TABLE "animes" (
    "id" SERIAL NOT NULL,
    "cover" VARCHAR NOT NULL,
    "title" VARCHAR NOT NULL,
    "episodes" INTEGER NOT NULL,
    "status" VARCHAR NOT NULL,
    "aired" DATE NOT NULL,

    CONSTRAINT "animes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animes_title_key" ON "animes"("title");
