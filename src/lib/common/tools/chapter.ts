/** Matches a dotted chapter/section number: "6", "6.1", "5.12" — one or more digits, optionally
 * followed by a dot and one or more digits. Shared between the zod schema (input validation) and
 * anything that needs to describe the expected format to a user. */
export const CHAPTER_PATTERN = /^\d+(\.\d+)?$/;

/**
 * Compares chapter strings segment by segment as integers, the way a human numbering scheme
 * intends — NOT as a plain string (which would sort "6.12" before "6.2") or a float (which would
 * treat "6.12" as the number 6.12, also sorting it before "6.2" — the ".12" is a second whole
 * segment, not decimal digits).
 */
export function compareChapters(a: string, b: string): number {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  const length = Math.max(partsA.length, partsB.length);

  for (let i = 0; i < length; i++) {
    const diff = (partsA[i] ?? 0) - (partsB[i] ?? 0);
    if (diff !== 0) return diff;
  }

  return 0;
}

/** Sorts by chapter, falling back to title for presentations sharing a chapter — mirrors the old
 * `orderBy: [{ chapter: 'asc' }, { title: 'asc' }]`, which can no longer sort correctly at the
 * database level now that chapter is a dotted string instead of a plain integer. */
export function sortByChapter<T extends { chapter: string; title: string }>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => compareChapters(a.chapter, b.chapter) || a.title.localeCompare(b.title)
  );
}

/** Prepends the chapter to a presentation's title for display — the title column itself always
 * stays exactly as entered, this is UI-only formatting (see the chapter field's Form.Description
 * in create/modify-presentation-form.svelte). */
export function formatChapterTitle(presentation: { chapter: string; title: string }): string {
  return `${presentation.chapter} - ${presentation.title}`;
}
