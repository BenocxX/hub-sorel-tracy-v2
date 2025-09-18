<script lang="ts">
  import AlexandreVovanFace from '$lib/client/assets/images/landing/teachers/alexandre-vovan-face.jpg';
  import ChristoperMasseFace from '$lib/client/assets/images/landing/teachers/christopher-masse-face.jpg';
  import DavidTuckerFace from '$lib/client/assets/images/landing/teachers/david-tucker-face.jpg';
  import HuguesMasseFace from '$lib/client/assets/images/landing/teachers/hugues-masse-face.jpg';
  import JeanPhilippeHebertFace from '$lib/client/assets/images/landing/teachers/jean-philippe-hebert-face.jpg';
  import JordanRiouxLeclaireFace from '$lib/client/assets/images/landing/teachers/jordan-rioux-leclaire-face.jpg';
  import MathisCoteFace from '$lib/client/assets/images/landing/teachers/mathis-cote-face.jpg';
  import RichardFarleyFace from '$lib/client/assets/images/landing/teachers/richard-farley-face.jpg';
  import HugoLarochelleFace from '$lib/client/assets/images/landing/teachers/hugo-larochelle-face.png';
  import SamuelParadisFace from '$lib/client/assets/images/landing/teachers/samuel-paradis-face.png';

  const people = [
    {
      name: 'Richard Farley',
      role: 'Spécialiste en algorithmes',
      passion: 'Amateur de sports et musique',
      imageUrl: RichardFarleyFace,
    },
    {
      name: 'Alexandre Vovan',
      role: 'Développement IoT',
      passion: 'Bicroleur de tout genre',
      imageUrl: AlexandreVovanFace,
    },
    {
      name: 'Jean-Philippe Hébert',
      role: 'Coordonateur du HUB',
      passion: "Passionné d'entrepreneuriat",
      imageUrl: JeanPhilippeHebertFace,
    },
    {
      name: 'David Tucker',
      role: 'Blockchain et cyber-sécurité',
      passion: "Fan d'univers d'horreur",
      imageUrl: DavidTuckerFace,
    },
    {
      name: 'Jordan Rioux-Leclair',
      role: 'Développeur full-stack',
      passion: 'Amoureux de ses samoyèdes',
      imageUrl: JordanRiouxLeclaireFace,
    },
    {
      name: 'Christoper Massé',
      role: 'Spécialiste bases de données',
      passion: 'Joueur de jeux de société',
      imageUrl: ChristoperMasseFace,
    },
    {
      name: 'Hugues Massé',
      role: 'Coordonateur du programme',
      passion: 'Participant de JDR et Grandeur Nature',
      imageUrl: HuguesMasseFace,
    },
    {
      name: 'Mathis Côté',
      role: 'Développeur front-end',
      passion: "Fan d'arts de tout genre",
      imageUrl: MathisCoteFace,
    },
    {
      name: 'Hugo Larochelle',
      role: 'Temp',
      passion: 'Temp',
      imageUrl: HugoLarochelleFace,
    },
    {
      name: 'Samuel Paradis',
      role: 'TTP et développeur back-end',
      passion: 'Amateur de skate',
      imageUrl: SamuelParadisFace,
    },
  ];
</script>

<div class="bg-white">
  <div class="container mx-auto grid gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-xl">
      <h2 class="text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Voici le département T.I.
      </h2>
      <p class="mt-6 text-lg leading-8 text-foreground-discreet">
        Le personnel du département T.I. sont des professionnels de l'industrie, passionnés et
        engagés à partager leurs connaissances en programmation. Ils se consacrent à rester à jour,
        peu importe la vitesse à laquelle évolue le secteur.
      </p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      {#each people as person (person.name)}
        <li>
          <div class="flex items-center gap-x-6">
            <img
              alt={`Photo de ${person.name}`}
              src={person.imageUrl}
              class="h-16 w-16 rounded-full"
            />
            <div>
              <h3 class="text-base font-semibold leading-7 tracking-tight text-foreground">
                {person.name}
              </h3>
              <p class="text-sm font-semibold leading-6 text-primary">{person.role}</p>
              <p class="text-xs font-semibold leading-6 text-foreground-discreet">
                {person.passion}
              </p>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
