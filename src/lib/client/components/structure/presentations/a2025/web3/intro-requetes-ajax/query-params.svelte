<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 15 });
</script>

<BasicSlide>
  <p>
    Lors de la communication avec un API, il est souvent nécessaire de passer des paramètres pour
    spécifier les données que l'on souhaite récupérer et/ou envoyer.
  </p>
  <p>
    Les <Bold>query parameters</Bold> (<Italic>paramètres de requête</Italic>) sont une manière
    courante de transmettre ces informations dans l'URL d'une requête HTTP.
  </p>
  <p class="fragment">
    Les <Bold>query parameters</Bold> sont ajoutés à la fin de l'URL après un point d'interrogation (<InlineCodeBlock
      >?</InlineCodeBlock
    >) et sont constitués de paires clé-valeur séparées par des esperluettes (<InlineCodeBlock
      >&amp;</InlineCodeBlock
    >).
  </p>
  <div class="fragment space-y-6">
    <p>Voici un exemple d'URL avec des <Bold>query parameters</Bold> :</p>
    <p>
      <InlineCodeBlock
        >https://hub-sorel-tracy.mathiscote.ca/courses?search=javascript&sort=popular</InlineCodeBlock
      >
    </p>
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Parfois, les paramètres contiennent des caractères spéciaux (espaces, &, =, etc.) qui doivent
    être encodés pour être transmis correctement dans l'URL. Cela se fait généralement en utilisant
    la fonction <InlineCodeBlock>encodeURIComponent()</InlineCodeBlock> en JavaScript.
  </p>
  <CodeBlock
    language="JS"
    code={`const search = 'paradigme orienté objet';
const encodedSearch = encodeURIComponent(search);

const url = \`https://hub-sorel-tracy.mathiscote.ca/courses?search=\${encodedSearch}\`;`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Pour ajouter plusieurs paramètres de requête simplement, on peut utiliser
    <InlineCodeBlock>URLSearchParams</InlineCodeBlock> :
  </p>
  <CodeBlock
    language="JS"
    code={`const params = new URLSearchParams();
params.append('search', 'paradigme orienté objet');
params.append('sort', 'popular');

const url = \`https://hub-sorel-tracy.mathiscote.ca/courses?\${params.toString()}\`;`}
  />
  <p class="fragment">
    Notez que <InlineCodeBlock>URLSearchParams</InlineCodeBlock> gère automatiquement l'encodage des
    paramètres!
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Voici une seconde manière d'utiliser <InlineCodeBlock>URLSearchParams</InlineCodeBlock> pour créer
    une URL avec des paramètres de requête à partir d'un objet JavaScript :
  </p>
  <CodeBlock
    language="JS"
    code={`const params = new URLSearchParams({
  search: 'paradigme orienté objet',
  sort: 'popular',
});

const url = \`https://hub-sorel-tracy.mathiscote.ca/courses?\${params.toString()}\`;`}
  />
</BasicSlide>
