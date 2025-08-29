<script lang="ts">
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu';
  import { ChevronsUpDownIcon, Cog, LogOut, Shield } from 'lucide-svelte';
  import { useSidebar } from '$lib/client/components/ui/sidebar';
  import { enhance } from '$app/forms';
  import { resolve } from '$app/paths';
  import UserAvatar from '../../ui-custom/avatar/user-avatar.svelte';

  let { user }: { user: NonNullable<App.PageData['user']> } = $props();
  const sidebar = useSidebar();

  let logoutForm: HTMLFormElement;
</script>

{#snippet userInfo()}
  <UserAvatar {user} />
  <div class="grid flex-1 text-left text-sm leading-tight">
    <span class="truncate font-medium">{user.username}</span>
    <span class="truncate text-xs text-foreground-discreet">{user.firstname} {user.lastname}</span>
  </div>
{/snippet}

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
            {@render userInfo()}
            <ChevronsUpDownIcon class="ml-auto size-4" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
        side={sidebar.isMobile ? 'bottom' : 'right'}
        align="end"
        sideOffset={4}
      >
        <DropdownMenu.Label class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            {@render userInfo()}
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        {#if user.role === 'Admin'}
          <DropdownMenu.Group>
            <a href={resolve('/savant/admin')}>
              <DropdownMenu.Item>
                <Shield />
                Admin
              </DropdownMenu.Item>
            </a>
          </DropdownMenu.Group>
        {/if}
        <DropdownMenu.Group>
          <a href={resolve('/savant/settings')}>
            <DropdownMenu.Item>
              <Cog />
              Paramètres
            </DropdownMenu.Item>
          </a>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <form method="POST" action="/savant?/logout" use:enhance bind:this={logoutForm}>
          <DropdownMenu.Item onclick={() => logoutForm.requestSubmit()}>
            <LogOut />
            <span>Déconnexion</span>
          </DropdownMenu.Item>
        </form>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
