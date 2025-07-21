<script lang="ts">
  import { socials } from '$lib/tools/socials';
  import { cn } from '$lib/utils';
  import { Button } from '../ui/button';
  import Logo from '../custom-ui/logo.svelte';

  const { inSheet, class: classes }: { inSheet?: boolean; class?: string } = $props();
</script>

<footer aria-labelledby="footer-heading" class="bg-background">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class={cn('px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32', classes)}>
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <a href="/">
        <Logo class="h-16 lg:h-20 xl:h-24" />
      </a>
    </div>
    <div class="mt-8 border-t pt-8 md:flex md:items-center md:justify-between">
      <div class={cn('flex space-x-6 md:order-2', inSheet && 'space-x-2')}>
        {#each socials as social (social.name)}
          <Button
            href={social.href}
            target="_blank"
            size="icon"
            variant="ghost"
            class="text-foreground-discreet"
          >
            <span class="sr-only">{social.name}</span>
            <social.icon aria-hidden="true" class="!size-6" />
          </Button>
        {/each}
      </div>
      <p class="mt-8 text-xs leading-5 text-foreground-discreeter md:order-1 md:mt-0">
        &copy; 2024 - Touts droits réservés à
        <a
          href="https://www.linkedin.com/in/mathis-c%C3%B4t%C3%A9-37b276231/"
          target="_blank"
          class="link text-sm font-semibold leading-6 text-foreground-discreet hover:text-foreground"
        >
          Mathis Côté
        </a>
        et au
        <a
          href="https://ca.linkedin.com/company/hubcegepsoreltracy"
          target="_blank"
          class="link text-sm font-semibold leading-6 text-foreground-discreet hover:text-foreground"
        >
          HUB du Cégep de Sorel-Tracy
        </a>
      </p>
    </div>
  </div>
</footer>
