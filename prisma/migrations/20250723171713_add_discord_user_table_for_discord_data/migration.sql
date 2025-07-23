/*
  Warnings:

  - You are about to drop the column `discordId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_discordId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "discordId";

-- CreateTable
CREATE TABLE "DiscordUser" (
    "userId" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,

    CONSTRAINT "DiscordUser_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordUser_userId_key" ON "DiscordUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordUser_discordId_key" ON "DiscordUser"("discordId");

-- AddForeignKey
ALTER TABLE "DiscordUser" ADD CONSTRAINT "DiscordUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
