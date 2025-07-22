-- DropForeignKey
ALTER TABLE "OAuthToken" DROP CONSTRAINT "OAuthToken_sessionId_fkey";

-- AddForeignKey
ALTER TABLE "OAuthToken" ADD CONSTRAINT "OAuthToken_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
