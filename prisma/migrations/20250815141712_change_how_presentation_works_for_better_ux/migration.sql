/*
  Warnings:

  - You are about to drop the column `abbreviation` on the `Presentation` table. All the data in the column will be lost.
  - You are about to drop the column `isExternal` on the `Presentation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Presentation" DROP COLUMN "abbreviation",
DROP COLUMN "isExternal",
ADD COLUMN     "componentId" TEXT,
ALTER COLUMN "url" DROP NOT NULL;
