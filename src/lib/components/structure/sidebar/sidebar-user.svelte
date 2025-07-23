<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import * as Avatar from '$lib/components/ui/avatar';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { ChevronsUpDownIcon } from 'lucide-svelte';

  let { user }: { user: App.PageData['user'] } = $props();
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            {...props}
          >
            <Avatar.Root class="size-8 rounded-lg">
              <Avatar.Image
                src={`https://cdn.discordapp.com/avatars/${user.discordUser?.discordId}/${user.discordUser?.avatar}.png?size=64`}
                alt={user.username}
              />
              <Avatar.Fallback class="rounded-lg">
                {#if user.firstname && user.lastname}
                  {user.firstname[0]}{user.lastname[0]}
                {:else}
                  {user.username[0]}
                {/if}
              </Avatar.Fallback>
            </Avatar.Root>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{user.username}</span>
              <span class="truncate text-xs">{user.firstname} {user.lastname}</span>
            </div>
            <ChevronsUpDownIcon class="ml-auto size-4" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
