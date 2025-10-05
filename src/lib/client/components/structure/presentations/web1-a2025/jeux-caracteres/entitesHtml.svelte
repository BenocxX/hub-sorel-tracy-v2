<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { lt } from 'date-fns/locale';
  import { ArrowRight } from 'lucide-svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List>
    <li>
      Sans préciser de jeu de caractères, on peut quand même afficher des caractères
      <Italic>spéciaux</Italic> ou des <Italic>symboles</Italic> à l'écran avec une entité HTML.
    </li>
    <li>
      Une entité HTML est un code écrit entre le caractère
      <InlineCodeBlock>&</InlineCodeBlock> et le caractère
      <InlineCodeBlock>;</InlineCodeBlock>.
    </li>
    <li>
      Le navigateur transforme ces entités en caractères correspondants, peu importe le jeu de
      caractères en place. C'est une façon uniforme indépendamment de la langue et des plateformes
      pour représenter les caractères spéciaux.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List paragraph="Quelques exemples :">
    <li>
      <div class="flex items-center gap-2">
        <InlineCodeBlock>&amp;eacute;</InlineCodeBlock>
        <ArrowRight />
        <InlineCodeBlock>&eacute;</InlineCodeBlock>
      </div>
    </li>
    <li>
      <div class="flex items-center gap-2">
        <InlineCodeBlock>&amp;egrave;</InlineCodeBlock>
        <ArrowRight />
        <InlineCodeBlock>&egrave;</InlineCodeBlock>
      </div>
    </li>
    <li>
      <div class="flex items-center gap-2">
        <InlineCodeBlock>&amp;copy;</InlineCodeBlock>
        <ArrowRight />
        <InlineCodeBlock>&copy;</InlineCodeBlock>
      </div>
    </li>
  </List>
  <p>
    En HTML, les caractères <InlineCodeBlock>&lt;</InlineCodeBlock> et
    <InlineCodeBlock>&gt;</InlineCodeBlock> ne peuvent pas fonctionner ! Ils sont utilisés pour identifier
    les balises qui forment le document.
  </p>
  <List paragraph="Pour ces caractères, il faut utiliser des entités HTML :">
    <li>
      <div class="flex items-center gap-2">
        <InlineCodeBlock>&amp;lt;</InlineCodeBlock>
        <ArrowRight />
        <InlineCodeBlock>&lt;</InlineCodeBlock>
      </div>
    </li>
    <li>
      <div class="flex items-center gap-2">
        <InlineCodeBlock>&amp;gt;</InlineCodeBlock>
        <ArrowRight />
        <InlineCodeBlock>&gt;</InlineCodeBlock>
      </div>
    </li>
  </List>
</BasicSlide>
