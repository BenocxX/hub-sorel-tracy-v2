<script lang="ts">
  import { formatCommentUrl } from '$lib/common/tools/format';

  type Props = {
    comment: { presentationId: number; courseId: number; slideId: string; content: string };
  };

  const { comment }: Props = $props();
</script>

<a
  href={formatCommentUrl(comment)}
  data-sveltekit-reload
  class="link ml-4 line-clamp-2 text-foreground"
>
  {comment.content}
</a>
