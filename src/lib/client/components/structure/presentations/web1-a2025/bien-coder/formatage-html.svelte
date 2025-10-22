<script lang="ts">
  import {
    BasicSlide,
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
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <List>
    <li>Indenter votre code.</li>
    <li>Toutes les balises doivent être en minuscule.</li>
    <li>Tous les attributs de balise doivent être en minuscule.</li>
    <li>Toutes les balises doivent être fermées.</li>
    <li>Tous les attributs HTML doivent être en anglais.</li>
  </List>
</BasicSlide>
<BasicSlide subTitle="Mauvais code">
  <CodeBlock
    language="HTML"
    code={`<Footer claSS="site-footer">
  <DIV Class="info">
    <a HREF="#">lien</A>
    <P>Mon paragraphe qui se ferme pas...
  </DIV>
</FooteR>`}
  />
</BasicSlide>
<BasicSlide subTitle="Meilleur code">
  <CodeBlock
    language="HTML"
    code={`<footer class="site-footer">
  <div class="info">
    <a href="#">lien</a>
    <p>Mon paragraphe qui se ferme!</p>
  </div>
</footer>`}
  />
  <p>
    À noter qu'il existe un
    <OutsideLink href="https://validator.w3.org/#validate_by_input">
      validateur de code HTML
    </OutsideLink>
    pour vous aider à s'assurer que votre code est valide. Je vous recommande de valider chaque page
    de votre site web avec cet outil.
  </p>
</BasicSlide>
<BasicSlide>
  <List paragraph="Chaque page HTML doit minmalement contenir:">
    <li>
      Le <InlineCodeBlock>DOCTYPE</InlineCodeBlock> HTML5
    </li>
    <li>
      La balise racine <InlineCodeBlock>html</InlineCodeBlock>
    </li>
    <li>
      L'attribut <InlineCodeBlock>lang</InlineCodeBlock> sur la balise
      <InlineCodeBlock>html</InlineCodeBlock>
    </li>
    <li>
      La balise <InlineCodeBlock>head</InlineCodeBlock>
    </li>
    <li>
      La balise pour indiquer le <InlineCodeBlock>charset</InlineCodeBlock> comme première ligne du
      <InlineCodeBlock>head</InlineCodeBlock>
    </li>
    <li>
      La balise <InlineCodeBlock>body</InlineCodeBlock>
    </li>
    <li>Etc.</li>
  </List>
</BasicSlide>
