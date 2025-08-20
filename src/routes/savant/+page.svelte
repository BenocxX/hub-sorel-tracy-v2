<script>
  import { OutsideLink } from '$lib/client/components/utils';
  import { BookOpenText, Cpu, Handshake } from 'lucide-svelte';
</script>

<div class="bg-background py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h1
        class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-balance"
      >
        Bienvenue sur <em class="italic text-primary dark:text-primary-400">Savant</em>
      </h1>
      <p class="mt-6 text-lg/8 text-foreground-discreet">
        <em class="text-foreground">Savant</em> offre un accès à une multitude de présentations et
        ressources pour votre parcours dans la technique de <OutsideLink
          href="https://www.cegepst.qc.ca/programme/developpement-dapplications-web-et-mobiles/"
          class="text-foreground">Développement d'applications Web et Mobiles</OutsideLink
        > du <OutsideLink href="https://www.cegepst.qc.ca/" class="text-foreground"
          >Cégep de Sorel-Tracy</OutsideLink
        >.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
      <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-foreground">
            <Cpu class="size-5 flex-none text-primary dark:text-primary-400" />
            Moderne
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base/7 text-foreground-discreet">
            <p class="flex-auto">
              Savant est conçu pour être à la pointe de la technologie éducative, intégrant des
              outils et des méthodes d'apprentissage innovants tels que le système de présentation
              moderne basé sur
              <a href="https://revealjs.com/" target="_blank" class="link italic text-foreground">
                Reveal.js
              </a>.
            </p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-foreground">
            <Handshake class="size-5 flex-none text-primary dark:text-primary-400" />
            Communication
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base/7 text-foreground-discreet">
            <p class="flex-auto">
              Grâce à une interface intuitive et des outils de collaboration avancés, Savant
              facilite la communication entre les apprenants et les formateurs.
            </p>
          </dd>
        </div>
        <div class="flex flex-col">
          <dt class="flex items-center gap-x-3 text-base/7 font-semibold text-foreground">
            <BookOpenText class="size-5 flex-none text-primary dark:text-primary-400" />
            Connaissance
          </dt>
          <dd class="mt-4 flex flex-auto flex-col text-base/7 text-foreground-discreet">
            <p class="flex-auto">
              La plateforme <em class="italic">Savant</em> vise à rendre l'éducation accessible à tous,
              avec pour but de fournir des ressources et des outils adaptés à chaque apprenant.
            </p>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
