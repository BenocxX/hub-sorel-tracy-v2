import { getContext, setContext } from 'svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type {
  CreateCommentSchema,
  DeleteCommentSchema,
  ResolveCommentSchema,
} from '$lib/common/schemas/comment-schemas';
import type { Comment } from '$lib/common/types/prisma-types';

export type CommentWithAuthor = Comment<{ author: { include: { discordUser: true } } }> & {
  /** Whether the author has a Teacher profile — drives the "teacher reply" badge/pinning. */
  isTeacherAuthor: boolean;
};

export type PresentationCommentsContextValue = {
  presentationId: number;
  isTeacher: boolean;
  userId: string;
  /** Students can't start new threads while true; teachers always can. */
  isLocked: boolean;
  comments: CommentWithAuthor[];
  forms: {
    createComment: SuperValidated<Infer<CreateCommentSchema>>;
    deleteComment: SuperValidated<Infer<DeleteCommentSchema>>;
    resolveComment: SuperValidated<Infer<ResolveCommentSchema>>;
  };
};

const presentationCommentsSymbol = Symbol('presentation-comments');

/** Set once, high in the tree (the presentation route's +page.svelte), so the comments section —
 * mounted much lower, inside PresentationRoot — can reach page data without threading props
 * through every slide/layout component in between (mdsvex's compiled output makes that
 * impractical; Svelte context works regardless of how deep the render tree gets). */
export function setPresentationCommentsContext(value: PresentationCommentsContextValue) {
  setContext(presentationCommentsSymbol, value);
}

export function getPresentationCommentsContext() {
  return getContext<PresentationCommentsContextValue>(presentationCommentsSymbol);
}
