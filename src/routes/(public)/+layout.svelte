<script lang="ts">
  import Footer from '$lib/client/components/structure/footer.svelte';
  import Navbar from '$lib/client/components/structure/navbar.svelte';

  // This is needed to remove Dark Mode on public pages since we don't have a dark mode for them
  // The current theme is still set in localstorage, it's just temporarily removed from the html tag
  // on public pages, when going back to Savant it's reapplied.
  $effect(() => {
    const htmlTag = document.querySelector('html');
    htmlTag?.classList.remove('dark');
  });

  const { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Navbar />
  <main class="flex flex-1 flex-col gap-40 pb-16 pt-32 sm:gap-48 [&:has(.ignore-nav-padding)]:pt-0">
    {@render children()}
  </main>
  <Footer class="container mx-auto" />
</div>
