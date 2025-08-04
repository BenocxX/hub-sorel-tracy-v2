-- CreateEnum
CREATE TYPE "Season" AS ENUM ('Fall', 'Winter', 'Summer');

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "schoolSessionId" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchoolSession" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "season" "Season" NOT NULL,

    CONSTRAINT "SchoolSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CourseToTeacher" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CourseToTeacher_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CourseToTeacher_B_index" ON "_CourseToTeacher"("B");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_schoolSessionId_fkey" FOREIGN KEY ("schoolSessionId") REFERENCES "SchoolSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToTeacher" ADD CONSTRAINT "_CourseToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToTeacher" ADD CONSTRAINT "_CourseToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
