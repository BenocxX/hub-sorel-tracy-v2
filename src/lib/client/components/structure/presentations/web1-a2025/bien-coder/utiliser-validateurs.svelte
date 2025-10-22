<script lang="ts">
  import {
    BasicSlide,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { OutsideLink } from '$lib/client/components/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 27 });
</script>

<BasicSlide>
  <p>
    Les validateurs existent pour vous permettre de soumettre vos codes pour les faire valider au
    niveau de la syntaxe. En soumettant vos codes, vous obtiendrez une liste de toutes les erreurs
    et les avertissements pour ceux-ci. Il est important de valider vos codes et de corriger tous
    les problèmes indiqués.
  </p>
  <List>
    <li>
      <OutsideLink href="https://validator.w3.org/#validate_by_input">Validateur HTML</OutsideLink>
    </li>
    <li>
      <OutsideLink href="https://jigsaw.w3.org/css-validator/#validate_by_input">
        Validateur CSS
      </OutsideLink>
    </li>
  </List>
</BasicSlide>
