<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 4 });
</script>

<BasicSlide>
  <p>
    Vous avez peut-être remarqué que lorsque les éléments ont le <Italic>focus</Italic> il y a un halo
    qui apparaît pour identifier l'élément. Chaque navigateur affiche cet effet différemment.
  </p>
  <p>
    Il est possible de contrôler les effets de ce halo avec la propriété
    <InlineCodeBlock>outline</InlineCodeBlock>. Pour éliminer complètement le halo, on applique la
    valeur <InlineCodeBlock>none</InlineCodeBlock> simplement.
  </p>
  <CodeBlock
    language="CSS"
    code={`input[type=text], input[type=password]{
    ...
    outline: none;
}`}
  >
    <input
      type="text"
      placeholder="Nom"
      class="mb-1 mt-1 w-[420px] rounded-md border border-[#CCC] px-2 py-1 text-[#606060] shadow-inner shadow-[rgba(100,100,100,0.1)] outline-none"
    />
  </CodeBlock>
</BasicSlide>
