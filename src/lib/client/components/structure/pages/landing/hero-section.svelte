<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';
  import { ArrowDown } from 'lucide-svelte';
  import DavidEt2Etudiants from '$lib/client/assets/images/landing/david-et-2-etudiants.jpg';
  import { resolve } from '$app/paths';

  function smoothScrollTo(event: PointerEvent) {
    event.preventDefault();

    const headerOffset = 100;
    const targetId = '#bento-section';

    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
      return;
    }

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
</script>

<div
  class="ignore-nav-padding relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-8"
>
  <div
    aria-hidden="true"
    class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 sm:-mr-80 lg:-mr-96"
  ></div>
  <div class="container mx-auto px-6 pt-32 sm:pt-40 lg:px-8">
    <div
      class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
    >
      <h1
        class="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl lg:col-span-2 xl:col-auto"
      >
        Être compétent, c'est l'fun!
      </h1>
      <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
        <p class="text-pretty text-lg text-foreground-discreet sm:text-xl/8">
          Vivez l'expérience complète du programme
          <em class="font-medium">Développement d'applications Web et Mobiles</em> en Techniques de
          l'informatique du
          <em class="font-medium">Cégep de Sorel-Tracy</em> pour maîtriser le développement d'applications
          autonomes, web et mobiles, le développement de jeux vidéo, ainsi que d'écosystèmes connectés
          IoT, tout en stimulant votre motivation entrepreneuriale dans le domaine technologique.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <Button onclick={smoothScrollTo}>
            En apprendre plus
            <ArrowDown class="scale-125" />
          </Button>
          <Button href={resolve('/savant')} variant="ghost">
            <span>
              Accéder à <em>Savant</em>
            </span>
          </Button>
        </div>
      </div>
      <figure
        class="mt-10 w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
      >
        <img
          src={DavidEt2Etudiants}
          alt="David et 2 étudiants dans un local d'informatique"
          class="aspect-[6/5] rounded-2xl object-cover"
        />
        <figcaption class="mt-2 text-foreground-discreet">
          Un espace d'innovation dédié pour construire des bases solides avec des technologies de
          pointe vers une carrière en T.I.
        </figcaption>
      </figure>
    </div>
  </div>
  <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
</div>
