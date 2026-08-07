<script lang="ts">
  import {
    BasicSlide,
    Bold,
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
    Le mécanisme de contrôle d'erreur le plus simple et fréquent lors d'interaction avec
    l'utilisateur. Il s'agit simplement de valider les entrées de l'utilisateur et de lui afficher
    un message d'erreur significatif dans le cas d'une saisie erronée. On utilise cette technique
    <Bold>lorsqu'il est nécessaire d'avoir une entrée valide de l'utilisateur</Bold>.
  </p>
  <p>
    Dans le contexte d'une application qui nécessite des saisies d'un utilisateur, imaginez toujours
    que ce dernier est un hacker qui vise explicitement la destruction de votre système. C'est
    l'attitude qu'il faut adopter pour construire des applications robustes.
  </p>
  <p>
    Si le système demande d'entrer un entier, vérifiez que l'utilisateur n'a pas mis autre chose !
  </p>
</BasicSlide>
