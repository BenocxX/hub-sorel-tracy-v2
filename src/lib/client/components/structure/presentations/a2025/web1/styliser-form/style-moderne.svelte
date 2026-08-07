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
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Les formulaires de base en HTML sont très pauvres en qualité visuelle, mais il est très simple
    de les rendre rapidement agréables à l'oeil.
  </p>
  <CodeBlock
    language="CSS"
    code={`input[type=text], input[type=password]{
  border: 1px solid #CCC;
  border-radius: 5px;
  box-shadow: inset 1px 2px 4px rgba(100, 100, 100, 0.1);
  color: #606060;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 7px;
  width: 420px;
}`}
  >
    <input
      type="text"
      placeholder="Nom"
      class="mb-1 mt-1 w-[420px] rounded-md border border-[#CCC] px-2 py-1 text-[#606060] shadow-inner shadow-[rgba(100,100,100,0.1)]"
    />
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>Maintenant, un style simple des boutons.</p>
  <CodeBlock
    language="CSS"
    code={`button,
input[type=submit]{
  border: 0;
  border-radius: 6px;
  background-color: #65b3e2;
  padding: 8px 12px;
  color: #FFF;
  margin-bottom: 4px;
  margin-top: 4px;
  min-width: 120px;
  text-align: center;
}`}
  >
    <button class="mb-1 mt-1 min-w-[120px] rounded-md bg-[#65b3e2] px-3 py-2 text-white">
      Envoyer
    </button>
  </CodeBlock>
</BasicSlide>
