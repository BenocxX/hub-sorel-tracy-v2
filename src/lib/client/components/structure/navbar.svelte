<script lang="ts">
  import Logo from '../custom-ui/logo.svelte';

  import { page } from '$app/state';
  import { Button } from '../ui/button';
  import { Separator } from '../ui/separator';
  import * as Sheet from '$lib/client/components/ui/sheet';
  import { Menu } from 'lucide-svelte';
  import Footer from './footer.svelte';
  import { cn } from '$lib/client/utils';
  import { socials } from '$lib/common/tools/socials';

  const links = [
    {
      href: '/',
      label: 'Accueil',
    },
    {
      href: '/program',
      label: 'Notre programme',
    },
    {
      href: '/about',
      label: 'À propos',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ];

  const { class: classes }: { class?: string } = $props();
</script>

<header class={cn('fixed top-0 z-50 w-screen bg-white/75 backdrop-blur-md', classes)}>
  <div class="container mx-auto flex items-center justify-between">
    <div class="flex h-16 items-center justify-between gap-8">
      <div class="flex flex-shrink-0 items-center gap-4">
        <a href="/">
          <Logo class="h-10 w-auto" />
        </a>
      </div>
      <div class="hidden h-full items-center gap-4 md:flex">
        {#each links as link (link.href)}
          <div class="relative h-full">
            <a
              href={link.href}
              class={cn(
                'inline-flex h-full items-center px-1 pt-1 text-sm font-medium transition-colors',
                page.url.pathname === link.href
                  ? 'text-primary-950 dark:text-primary-50'
                  : 'text-foreground-400 hover:text-foreground'
              )}>{link.label}</a
            >
            {#if page.url.pathname === link.href}
              <div class="absolute bottom-0 h-[3px] w-full rounded-t-full bg-primary"></div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
    <div class="flex items-center gap-4">
      <Button href="/savant">
        <span>
          Accéder à <em>Savant</em>
        </span>
      </Button>
      <Sheet.Root>
        <Sheet.Trigger>
          {#snippet child({ props })}
            <Button size="icon" variant="ghost" class="md:hidden" {...props}>
              <span class="sr-only">Ouvrir le menu</span>
              <Menu class="!size-6" />
            </Button>
          {/snippet}
        </Sheet.Trigger>
        <Sheet.Content side="right" class="flex flex-col justify-between p-0">
          <Sheet.Header class="flex flex-col gap-2 p-6">
            <Sheet.Title class="text-3xl font-medium">Hub de Sorel-Tracy</Sheet.Title>
            <Separator />
            <div class="flex flex-col gap-1">
              {#each links as link (link.href)}
                <Sheet.Close>
                  {#snippet child({ props })}
                    <Button
                      variant={page.url.pathname === link.href ? 'secondary' : 'ghost'}
                      class="justify-start"
                      href={link.href}
                      {...props}
                    >
                      {link.label}
                    </Button>
                  {/snippet}
                </Sheet.Close>
              {/each}
            </div>
          </Sheet.Header>
          <Sheet.Footer class="mt-auto">
            <Footer inSheet />
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
      <Separator orientation="vertical" class="hidden h-9 lg:block" />
      {#each socials.filter((social) => social.isPrimary) as social (social.name)}
        <Button
          href={social.href}
          size="icon"
          variant="ghost"
          class="hidden text-foreground-discreet lg:flex"
          target="_blank"
        >
          <span class="sr-only">{social.name}</span>
          <social.icon aria-hidden="true" class="!size-6" />
        </Button>
      {/each}
    </div>
  </div>
</header>
