/*
  Warnings:

  - You are about to drop the `Passkey` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PasskeyCredentialOptions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Passkey" DROP CONSTRAINT "Passkey_userId_fkey";

-- DropForeignKey
ALTER TABLE "PasskeyCredentialOptions" DROP CONSTRAINT "PasskeyCredentialOptions_userId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "passwordHash" DROP NOT NULL;

-- DropTable
DROP TABLE "Passkey";

-- DropTable
DROP TABLE "PasskeyCredentialOptions";

-- CreateTable
CREATE TABLE "OAuthToken" (
    "sessionId" TEXT NOT NULL,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OAuthToken_sessionId_key" ON "OAuthToken"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "OAuthToken_accessToken_key" ON "OAuthToken"("accessToken");

-- AddForeignKey
ALTER TABLE "OAuthToken" ADD CONSTRAINT "OAuthToken_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
