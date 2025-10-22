<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { OutsideLink } from '$lib/client/components/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <List>
    <li>Indenter votre code.</li>
    <li>
      Mettre un espace avant <InlineCodeBlock>{'{'}</InlineCodeBlock> dans la déclaration d'une règle
      CSS.
    </li>
    <li>
      Mettre un espace après <InlineCodeBlock>:</InlineCodeBlock> dans la déclaration des propriétés
      CSS.
    </li>
    <li>
      Utiliser le code hexadécimal (ou <Bold>rgba</Bold>) pour les couleurs.
    </li>
    <li>
      Toutes les classes CSS et les attributs HTML doivent être en minuscule et séparés par des
      tirets (-).
    </li>
    <li>Toutes les classes CSS et les attributs HTML doivent être en anglais.</li>
    <li>Utiliser des noms clairs et complets (éviter les abréviations).</li>
  </List>
</BasicSlide>
<BasicSlide subTitle="Mauvais code">
  <CodeBlock
    language="CSS"
    code={`.badClassName1{
    color:black;
}
.bad_class_name2{
    padding:10px;
}
.BadClassName3{margin:5px;}`}
  />
</BasicSlide>
<BasicSlide subTitle="Meilleur code">
  <CodeBlock
    language="CSS"
    code={`.good-class-name1 {
    color: #000;
}

.good-class-name2 {
    padding: 10px;
}

.good-class-name3 {
    margin: 5px;
}`}
  />
  <p>
    À noter qu'il existe un
    <OutsideLink href="https://jigsaw.w3.org/css-validator/#validate_by_input">
      validateur de code CSS
    </OutsideLink> pour vous aider à s'assurer que votre code est valide. Chaque fichier CSS que vous
    créez doit être validé!
  </p>
</BasicSlide>
