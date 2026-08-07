<script lang="ts">
  import {
    BasicSlide,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 23 });
</script>

<BasicSlide>
  <p>
    En HTML, on veut éviter autant que possible d'utiliser des commentaires. Le HTML n'est pas un
    vrai langage de programmation, il n'y a pas de logique qui demande à être expliquer "plus
    clairement".
  </p>
  <p>
    Si vous vous retrouvez dans une situation à devoir commenter votre code HTML pour mieux
    l'expliquer, il s'agit habituellement d'une situation où vous devriez probablement refaire votre
    structure HTML pour la rendre plus simple et plus claire.
  </p>
</BasicSlide>
<BasicSlide subTitle="Mauvais code">
  <CodeBlock
    language="HTML"
    code={`<!-- Ici, notre recette contient un h1 (titre) et un p (paragraphe pour son contenu). -->
<!-- On affiche chaque recette avec son titre et son contenu -->
<div>
    <h1>Poutine aux trois fromages</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
</div>`}
  />
</BasicSlide>
<BasicSlide subTitle="Bon code">
  <CodeBlock
    language="HTML"
    code={`<div class="recipe">
    <h1>Poutine aux trois fromages</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
</div>`}
  />
</BasicSlide>
