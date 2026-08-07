<script lang="ts">
  import {
    BasicSlide,
    Bold,
    BoldItalic,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List>
    <li>C'est en quelque sorte la peau sur les os (la structure HTML).</li>
    <li>
      Le langage CSS permet de modifier graphiquement (le format et le visuel) les éléments qui
      composent un document HTML (par exemple, modifier comment une balise
      <InlineCodeBlock>p</InlineCodeBlock> affiche son texte).
    </li>
    <li>
      Acronyme de <Bold>C</Bold>ascading <Bold>S</Bold>tyle <Bold>S</Bold>heet
    </li>
    <li>
      Permet de séparer complètement la "<BoldItalic>structure</BoldItalic>" (HTML) d'un site de sa
      "<BoldItalic>présentation</BoldItalic>" (CSS).
    </li>
    <li>
      Permet d'adapter le visuel selon différents formats (une tablette, un téléphone, une
      imprimante, un écran de 17", un écran de 60", etc.).
    </li>
    <li>Les spécifications du CSS sont maintenues par le W3C.</li>
    <li>Il existe plusieurs versions. La version actuelle est le CSS3.</li>
  </List>
</BasicSlide>
