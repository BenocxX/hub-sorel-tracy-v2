-- DropForeignKey
ALTER TABLE "Presentation" DROP CONSTRAINT "Presentation_courseId_fkey";

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "abbreviation" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Presentation" ADD COLUMN     "abbreviation" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "Presentation" ADD CONSTRAINT "Presentation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
