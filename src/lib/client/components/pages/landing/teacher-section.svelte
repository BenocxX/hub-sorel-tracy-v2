<script lang="ts">
  import AlexandreVovanFace from '$lib/client/assets/images/landing/teachers/alexandre-vovan-face.jpg';
  import ChristoperMasseFace from '$lib/client/assets/images/landing/teachers/christopher-masse-face.jpg';
  import DavidTuckerFace from '$lib/client/assets/images/landing/teachers/david-tucker-face.jpg';
  import HuguesMasseFace from '$lib/client/assets/images/landing/teachers/hugues-masse-face.jpg';
  import JeanPhilippeHebertFace from '$lib/client/assets/images/landing/teachers/jean-philippe-hebert-face.jpg';
  import JordanRiouxLeclaireFace from '$lib/client/assets/images/landing/teachers/jordan-rioux-leclaire-face.jpg';
  import MathisCoteFace from '$lib/client/assets/images/landing/teachers/mathis-cote-face.jpg';
  import RichardFarleyFace from '$lib/client/assets/images/landing/teachers/richard-farley-face.jpg';

  const people = [
    {
      name: 'Jean-Philippe Hébert',
      role: 'Enseignant en entrepreneuriat',
      imageUrl: JeanPhilippeHebertFace,
    },
    {
      name: 'Alexandre Vovan',
      role: 'Enseignant en écosystèmes connectés',
      imageUrl: AlexandreVovanFace,
    },
    {
      name: 'Richard Farley',
      role: 'Enseignant en développement personnel',
      imageUrl: RichardFarleyFace,
    },
    {
      name: 'David Tucker',
      role: 'Enseignant en programmation web',
      imageUrl: DavidTuckerFace,
    },
    {
      name: 'Jordan Rioux-Leclaire',
      role: 'Enseignant en programmation mobile',
      imageUrl: JordanRiouxLeclaireFace,
    },
    {
      name: 'Hugues Massé',
      role: 'Enseignant en informatique',
      imageUrl: HuguesMasseFace,
    },
    {
      name: 'Christoper Massé',
      role: 'Enseignant en base de données',
      imageUrl: ChristoperMasseFace,
    },
    {
      name: 'Mathis Côté',
      role: 'Enseignant en programmation web',
      imageUrl: MathisCoteFace,
    },
  ];
</script>

<div class="bg-white">
  <div class="container mx-auto grid gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-xl">
      <h2 class="text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Vos futurs enseignants
      </h2>
      <p class="mt-6 text-lg leading-8 text-foreground-discreet">
        Vos futurs enseignants sont des professionnels de l'industrie, passionnés et engagés à
        partager leurs connaissances en programmation. Ils se consacrent à rester à jour, peu
        importe la vitesse à laquelle évolue le secteur.
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
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
