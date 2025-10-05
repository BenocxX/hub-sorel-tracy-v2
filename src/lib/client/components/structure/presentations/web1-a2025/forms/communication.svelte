<script lang="ts">
  import {
    BasicSlide,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <List listType="ol" paragraph="Le processus est simple:">
    <li>
      Tout d'abord, le client demande la page HTML normalement et reçoit un formulaire sous forme
      HTML standard.
    </li>
    <li>Le client remplit le formulaire.</li>
    <li>Le client termine le formulaire en appuyant sur un bouton de soumission.</li>
    <li>
      Toutes les données saisies par l'utilisateur sont envoyées à l'adresse ciblée par le
      formulaire (un serveur qui va traiter la requête).
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List
    listType="ol"
    paragraph="Il existe deux façons sur le Web d'envoyer des données à un serveur :"
  >
    <li>
      <InlineCodeBlock>GET</InlineCodeBlock> : Lorsqu'on est en
      <InlineCodeBlock>GET</InlineCodeBlock>, les données à envoyer vont être écrites directement
      dans l'URL du navigateur. Cela veut dire que si vous avez entré un mot de passe, il sera
      totalement visible...
    </li>
    <li>
      <InlineCodeBlock>POST</InlineCodeBlock> : Lorsqu'on est en
      <InlineCodeBlock>POST</InlineCodeBlock>, les données sont cachées. Elles ne sont pas visibles
      à l'oeil nu par l'URL. Mais attention, elles ne sont aucunement cryptées ou sécurisées! Notez
      que, si vous voulez faire un rafraîchissement après une soumission par POST, le navigateur
      demande de confirmer l'envoi du formulaire.
    </li>
  </List>
</BasicSlide>
