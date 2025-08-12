<script lang="ts">
  import BasicSlide from '$lib/client/components/revealjs/custom/basic-slide.svelte';
  import { setSlideSection } from '$lib/client/components/revealjs/custom/utils';

  type Props = {
    section: string;
  };

  const { section }: Props = $props();

  setSlideSection(section);
</script>

<BasicSlide>
  <!-- <p>
    Un <Bold>site Web</Bold> est un ensemble de pages reliées. Il est hébergé sur un serveur et accessible
    depuis un réseau (Internet ou local).
  </p>
  <p>
    On utilise un <Bold>URL</Bold> (Uniform Resource Locator) pour identifier l'adresse d'un site Web.
    Une adresse est souvent représentée par un nom de domaine (
    <Italic>youtube.com, facebook.com, google.com</Italic>, etc.) suivi d'un chemin vers la page
    ciblée (index.html) tout en étant préfixé par le protocole HTTP ou HTTPS. Par exemple, <InlineCodeBlock
      allowCopy>https://monsite.com/index.html</InlineCodeBlock
    >.
  </p> -->
  <p>Tous les sites accessibles publiquement constituent le World Wide Web.</p>
</BasicSlide>
