<script lang="ts">
  import type { User } from '$lib/common/types/prisma-types';
  import type { AvatarRootProps } from 'bits-ui';
  import * as Avatar from '$lib/client/components/ui/avatar';
  import { mode } from 'mode-watcher';
  import { generateColorPair } from '$lib/common/tools/color-mixer';
  import { cn } from '$lib/client/utils';

  type Props = AvatarRootProps & {
    user: User<{ discordUser: true }>;
    fallbackClass?: string;
  };

  const { user, class: className, fallbackClass, ...props }: Props = $props();

  const { background, foreground } = $derived(generateColorPair(user.username, mode.current));
</script>

<Avatar.Root class={cn('size-8 rounded-lg', className)} {...props}>
  {#if user.discordUser}
    <Avatar.Image
      src={`https://cdn.discordapp.com/avatars/${user.discordUser?.discordId}/${user.discordUser?.avatar}.png?size=64`}
      alt={`Photo de profile de ${user.username}`}
    />
  {/if}
  <Avatar.Fallback
    class={cn('rounded-lg', fallbackClass)}
    style={`background-color: ${background}; color: ${foreground};`}
  >
    {#if user.firstname && user.lastname}
      {user.firstname[0]}{user.lastname[0]}
    {:else}
      {user.username[0]}
    {/if}
  </Avatar.Fallback>
</Avatar.Root>
