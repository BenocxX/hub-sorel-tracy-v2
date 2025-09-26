<script lang="ts">
  import UserAvatar from '$lib/client/components/ui-custom/avatar/user-avatar.svelte';
  import type { User } from '$lib/common/types/prisma-types';

  type Props = {
    user: User<{ discordUser: true }>;
  };

  const { user }: Props = $props();
</script>

<div class="ml-4 flex items-center gap-3">
  <!--
    We use a key block to recreate the UserAvatar whenever the user changes. This is needed when an
    the user props is changed from a user with an avatar to a user without an avatar. Without this,
    the UserAvatar component would not render the fallback because the Avatar.Image would still be
    in the DOM with a broken image link.

    See: https://svelte.dev/docs/svelte/key
   -->
  {#key user}
    <UserAvatar {user} />
  {/key}
  {user.username}
</div>
