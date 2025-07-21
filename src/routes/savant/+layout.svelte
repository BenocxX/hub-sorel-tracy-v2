<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import SavantSidebar from '$lib/components/structure/sidebar/savant-sidebar.svelte';
  import Separator from '$lib/components/ui/separator/separator.svelte';
  import Footer from '$lib/components/structure/footer.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import { Sun, LogOut, Moon, Home } from 'lucide-svelte';
  import { page } from '$app/state';
  import { cn } from '$lib/utils';
  import { ModeWatcher, resetMode, setMode } from 'mode-watcher';
  import { enhance } from '$app/forms';

  const { children } = $props();

  let isPresentation = $derived(page.route.id?.startsWith('/savant/presentation'));
</script>

<ModeWatcher />
<Sidebar.Provider>
  <SavantSidebar />
  <main class="flex h-screen w-full flex-col gap-8 overflow-y-auto py-2">
    <header class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-4">
        <Sidebar.Trigger />
        <Separator orientation="vertical" class="h-5" />
        <span class="text-foreground-discreet">Breadcrumb</span>
      </div>
      <div class="itemsnter flex gap-3">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Button variant="outline" size="icon-sm" {...props}>
                <Sun class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon
                  class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Item onclick={() => setMode('light')}>Light</DropdownMenu.Item>
            <DropdownMenu.Item onclick={() => setMode('dark')}>Dark</DropdownMenu.Item>
            <DropdownMenu.Item onclick={() => resetMode()}>System</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Button href="/" variant="outline" size="icon-sm">
          <span class="sr-only">Accueil</span>
          <Home />
        </Button>
        <form method="POST" action="/savant?/logout" use:enhance>
          <Button type="submit" variant="outline" size="icon-sm">
            <span class="sr-only">Déconnexion</span>
            <LogOut />
          </Button>
        </form>
      </div>
    </header>
    <div class={cn('flex-1', isPresentation ? '' : 'container mx-auto')}>
      {@render children?.()}
    </div>
    <Footer class="container mx-auto" />
  </main>
</Sidebar.Provider>
