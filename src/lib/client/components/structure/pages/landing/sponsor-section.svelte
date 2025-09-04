<script>
  import { Heart } from 'lucide-svelte';
  import DepsSponsor from '$lib/client/assets/images/landing/sponsors/deps.png';
  import DescartesSponsor from '$lib/client/assets/images/landing/sponsors/descartes.png';
  import SADCSponsor from '$lib/client/assets/images/landing/sponsors/sadc.png';
  import ConnexionSponsor from '$lib/client/assets/images/landing/sponsors/connexion.png';
  import LeviatSponsor from '$lib/client/assets/images/landing/sponsors/leviat.png';
  import TonEquipierSponsor from '$lib/client/assets/images/landing/sponsors/ton-equipier.png';
</script>

<div class="bg-white py-8 sm:py-12">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2
      class="flex flex-col items-center justify-center gap-2 text-xl font-semibold sm:flex-row sm:gap-4 lg:text-3xl"
    >
      <Heart class="size-10 fill-primary stroke-0" />
      <span class="text-center">Merci à tous nos partenaires qui rendent le HUB possible!</span>
    </h2>
    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <a href="https://depsregion.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={DepsSponsor}
          alt="Développement économique Pierre-De Saurel"
          class="col-span-2 mx-auto w-[250px] object-contain lg:col-span-1"
        />
      </a>
      <a
        href="https://www.descartes.com/fr/accueil?language=fr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={DescartesSponsor}
          alt="Descartes"
          class="col-span-2 mx-auto mt-4 w-[300px] object-contain lg:col-span-1"
        />
      </a>
      <a href="https://www.sadcpierredesaurel.ca/" target="_blank" rel="noopener noreferrer">
        <img
          src={SADCSponsor}
          alt="SADC Pierre-De Saurel"
          class="col-span-2 mx-auto w-[200px] object-contain lg:col-span-1"
        />
      </a>
      <a href="https://www.connexionentrepreneurs.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={ConnexionSponsor}
          alt="Connexion entrepreneurs"
          class="col-span-2 mx-auto w-[200px] object-contain lg:col-span-1"
        />
      </a>
      <a href="https://www.leviatlegal.com/" target="_blank" rel="noopener noreferrer">
        <img
          src={LeviatSponsor}
          alt="Leviat Legal"
          class="col-span-2 mx-auto w-[300px] rounded-lg object-contain lg:col-span-1"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/tonequipier/?originalSubdomain=ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={TonEquipierSponsor}
          alt="Ton Équipier"
          class="col-span-2 mx-auto max-w-[150px] object-contain md:max-w-[200px] lg:col-span-1 lg:max-w-[300px]"
        />
      </a>
    </div>
  </div>
</div>
