<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    Bold,
    Italic,
    List,
    Image,
    InlineCodeBlock,
  } from '$lib/client/components/revealjs/custom';
  import KenThompson from './ken-thompson.png';
  import DennisRitchie from './dennis-ritchie.png';
  import BrianKernighan from './brian-kernighan.png';
  import TheCProgrammingLanguage from './the-c-programming-language.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 0 });
</script>

<BasicSlide>
  <div class="flex gap-16">
    <Image src={KenThompson} alt="Ken Thompson" />
    <div class="space-y-8">
      <p>
        Ken Thompson, inventeur de la famille de système d'exploitation <Bold>UNIX</Bold>, invente
        le langage <InlineCodeBlock>B</InlineCodeBlock>.
      </p>
      <p class="fragment">
        Le langage <InlineCodeBlock>B</InlineCodeBlock> a pour but d'être utilisé sur les systèmes UNIX
        et d'être facile à prendre en main pour les développeurs.
      </p>
    </div>
  </div>
</BasicSlide>
<BasicSlide>
  <div class="flex gap-16 overflow-hidden">
    <Image
      src={DennisRitchie}
      alt="Dennis Ritchie"
      caption="Dennis Ritchie"
      figureClass="flex-1"
      class="h-[500px] w-full object-cover object-top"
    />
    <Image
      src={BrianKernighan}
      alt="Brian Kernighan"
      caption="Brian Kernighan"
      figureClass="flex-1"
      class="h-[500px] w-full"
    />
  </div>
</BasicSlide>
<BasicSlide>
  <div class="flex gap-16">
    <Image
      src={TheCProgrammingLanguage}
      alt="The C Programming Language"
      class="h-[500px] w-[1000px] rounded-none"
    />
    <div class="space-y-8">
      <p>
        En 1978, <Italic>Brian Kernighan</Italic> et <Italic>Dennis Ritchie</Italic> publient le livre
        <Italic>The C Programming Language</Italic>
      </p>
      <p class="fragment">
        En 1983, <Bold>ANSI</Bold> (<Italic>American National Standards Institute</Italic>) exige
        une définition explicite du langage <InlineCodeBlock>C</InlineCodeBlock>. La première
        version de cette définition s'appelle <InlineCodeBlock>C89</InlineCodeBlock>. Nous sommes
        présentement à la version <InlineCodeBlock>C23</InlineCodeBlock>.
      </p>
    </div>
  </div>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      <InlineCodeBlock>C</InlineCodeBlock> est un langage ayant plusieurs qualités:
    {/snippet}
    <li>Flexible</li>
    <li>Compact</li>
    <li>Simple</li>
    <li>Efficace</li>
    <li>Rapide</li>
    <li>Bas-niveau</li>
    <li>Multiplateforme</li>
  </List>
  <p class="fragment">
    De plus, <InlineCodeBlock>C</InlineCodeBlock> a été utilisé pour la foundation de plusieurs langages
    modernes.
  </p>
</BasicSlide>
