<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import DiscordIcon from '../icons/socials/discord-icon.svelte';
  import { resolve } from '$app/paths';

  const {
    href,
    class: classes,
    children,
  }: { href?: string; class?: string; children: Snippet } = $props();
</script>

<Button
  class={cn('bg-[#5765f2] text-white hover:bg-[#4f5ce7]', classes)}
  href={href ? href : resolve('/login/discord')}
>
  <DiscordIcon class="mr-1 !size-5 fill-white" />
  {@render children()}
</Button>
