<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Il est possible de contrôler le style des éléments qui ont le focus ! Il suffit d'utiliser la
    pseudo-classe <InlineCodeBlock>:focus</InlineCodeBlock>. Par exemple, nous pourrions ajouter un
    effet d'ombrage similaire au <InlineCodeBlock>outline</InlineCodeBlock>
    lorsque l'élément obtient le focus.
  </p>
  <CodeBlock
    language="css"
    code={`input[type=text]:focus,
input[type=password]:focus {
    border: 1px solid #EEE;
    box-shadow: 0 0 5px 1px #006EB6;
}`}
  >
    <input
      type="text"
      placeholder="Nom"
      class="my-1 w-[420px] rounded-md border border-[#CCC] px-2 py-1 text-[#606060] shadow-inner shadow-[rgba(100,100,100,0.1)] outline-none focus:border focus:border-[#EEE] focus:shadow-[0_0_5px_1px_#006EB6]"
    />
  </CodeBlock>
</BasicSlide>
