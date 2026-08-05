import { db } from '../prisma';

/**
 * Notifies every teacher of the course a new top-level comment (a "question") belongs to,
 * excluding the comment's own author (relevant if a teacher posts the top-level comment
 * themselves — no point notifying them of their own question).
 */
export async function notifyTeachersOfNewQuestion(comment: {
  id: number;
  courseId: number;
  authorId: string;
}) {
  const teachers = await db.teacher.findMany({
    where: { courses: { some: { id: comment.courseId } } },
    select: { id: true },
  });

  const recipientIds = teachers
    .map((teacher) => teacher.id)
    .filter((id) => id !== comment.authorId);
  if (recipientIds.length === 0) {
    return;
  }

  await db.notification.createMany({
    data: recipientIds.map((userId) => ({
      userId,
      commentId: comment.id,
      type: 'NewQuestion' as const,
    })),
  });
}

/**
 * Notifies the original author of a top-level comment once it's marked resolved — call only on
 * the false → true transition (see resolveComment in the presentation route's actions), not on
 * every resolve toggle, so answering doesn't spam a back-and-forth with repeat notifications.
 */
export async function notifyAuthorOfResolution(
  comment: { id: number; authorId: string },
  resolvedById: string
) {
  // The teacher resolved their own top-level comment — nothing to notify them of.
  if (comment.authorId === resolvedById) {
    return;
  }

  await db.notification.create({
    data: {
      userId: comment.authorId,
      commentId: comment.id,
      type: 'QuestionAnswered',
    },
  });
}
