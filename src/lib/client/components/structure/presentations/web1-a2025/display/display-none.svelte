<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { OutsideLink } from '$lib/client/components/utils';
  import DisplayDemoCodeBlock from './display-demo-code-block.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 15 });
</script>

<BasicSlide>
  <p>
    De loin l'une des plus utile, la valeur <Bold>none</Bold> permet de simuler que l'élément n'existe
    pas dans la page.
  </p>
  <p>
    L'élément ne sera pas cacher ou invisible... il n'existera tout simplement pas visuellement dans
    la structure.
  </p>
  <p>
    On utilise beaucoup cette valeur pour faire apparaître ou disparaître des éléments. Pour faire
    disparaître, on utilise <Bold>none</Bold> et pour faire réapparaître, on utilise <Bold
      >block</Bold
    > (ou un autre adéquat).
  </p>
</BasicSlide>
<BasicSlide>
  <DisplayDemoCodeBlock display="none" />
</BasicSlide>
<BasicSlide>
  <p>
    Il existe d'autres valeurs possibles pour display qui offre chacun un comportement unique qui
    peut s'avérer utile dans certain cas, mais elle sont plus rares.
  </p>
  <List paragraph="N'hésitez pas à consulter la liste au besoin.">
    <li>
      <OutsideLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
        https://developer.mozilla.org/en-US/docs/Web/CSS/display
      </OutsideLink>
    </li>
    <li>
      <OutsideLink href="https://www.w3schools.com/cssref/pr_class_display.asp">
        https://www.w3schools.com/cssref/pr_class_display.asp
      </OutsideLink>
    </li>
  </List>
</BasicSlide>
