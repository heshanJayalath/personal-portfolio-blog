/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `articles` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "articles_slug_idx";

-- CreateIndex
CREATE UNIQUE INDEX "articles_slug_key" ON "articles"("slug");
