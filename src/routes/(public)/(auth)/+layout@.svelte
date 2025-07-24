<script lang="ts">
  import EspritFamille from '$lib/client/assets/images/landing/esprit-famille.png';
  import Footer from '$lib/client/components/structure/footer.svelte';
  import Navbar from '$lib/client/components/structure/navbar.svelte';

  const { children } = $props();
</script>

<Navbar />
<div class="flex flex-row pb-16 pt-32 lg:h-screen lg:pb-0 lg:pt-16">
  <main
    class="flex h-full w-full flex-col items-center justify-center max-lg:container max-lg:mx-auto lg:w-1/2"
  >
    {@render children()}
  </main>
  <div class="hidden p-8 lg:block lg:w-1/2">
    <img
      src={EspritFamille}
      alt="Les étudiants et enseignants de la technique informatique lors d'une activité de groupe"
      class="h-full rounded-2xl object-cover"
    />
  </div>
</div>
<Footer />
