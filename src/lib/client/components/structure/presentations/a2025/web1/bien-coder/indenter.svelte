<script lang="ts">
  import {
    BasicSlide,
    Bold,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Un code indenté est plus <Bold>facile à lire</Bold>, <Bold>à comprendre</Bold> et
    <Bold>à modifier</Bold>. Vous pouvez choisir entre <Bold>2</Bold> ou <Bold>4</Bold>
    espaces pour l'indentation. L'important est d'être constant et de toujours utiliser le même nombre
    d'espaces.
  </p>
</BasicSlide>
<BasicSlide subTitle="Mauvais code">
  <CodeBlock
    language="HTML"
    code={`  <footer class="site-footer">
<div class="inside group">
     <div class="copyrights">
   © Fake Website 2020
</div>
  <nav class="footer-nav">
<ul>
  <li>Accueil</li>
      <li>Contact</li>
      </ul>
    </nav>
</div>
</footer>`}
  />
</BasicSlide>
<BasicSlide subTitle="Meilleur code">
  <CodeBlock
    language="HTML"
    code={`<footer class="site-footer">
  <div class="inside group">
    <div class="copyrights">
      © Fake Website 2020
    </div>
    <nav class="footer-nav">
      <ul>
        <li>Accueil</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
</footer>`}
  />
</BasicSlide>
<BasicSlide subTitle="Mauvais Code">
  <CodeBlock
    language="CSS"
    code={`.section {
background-color: #fff;
    color: #000;
 padding:30px;

}`}
  />
</BasicSlide>
<BasicSlide subTitle="Meilleur code">
  <CodeBlock
    language="CSS"
    code={`.section {
    background-color: #fff;
    color: #000;
    padding: 30px;
}`}
  />
</BasicSlide>
