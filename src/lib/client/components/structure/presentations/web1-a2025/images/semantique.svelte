<script lang="ts">
  import {
    BasicSlide,
    List,
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
    On utilise une image sur un site Web lorsqu'on veut afficher une image réelle du mieux que nous
    pouvons. Par exemple, des photos de voyage, une image de profil, un logo, etc.
  </p>
  <List
    paragraph="Pour les composants graphiques dans une page, on essaie d'utiliser une alternative aux images. Quelques exemples:"
  >
    <li>Dégradé de couleurs;</li>
    <li>Transparence;</li>
    <li>Coins arrondis;</li>
    <li>Etc.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Évidemment, il existe toujours des exceptions qui sont légitimes. Il est possible que quelque
    chose ne soit tout simplement pas réalisable directement en CSS et qu'il faille utiliser une
    ressource image.
  </p>
  <p>
    Il ne faut tout simplement pas en faire un abus et développer le réflexe de consulter tout
    d'abord les options CSS possibles et ensuite prendre une décision.
  </p>
  <p>
    Le CSS évolue très rapidement et il y a de fortes chances qu'il existe quelque chose qui répond
    à vos besoins...
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Le gros problème avec l'utilisation d'une ressource image pour constituer un composant graphique
    est qu'il sera difficile de le maintenir. Il sera toujours plus simple de modifier les couleurs
    d'un bouton par CSS que de créer une image avec une couleur différente pour un même bouton.
  </p>
  <p>
    Lorsqu'il y a du texte à l'intérieur d'une image, ceci est également très difficile à maintenir
    soit pour correction de fautes ou l'adaptation dans une autre langue. Ce sont souvent des
    irritants très désagréables.
  </p>
  <p>
    De plus, les images à faible résolution offrent un rendu horrible sur les écrans à haute
    résolution (Retina, iPhone, Android, etc.). Il faut donc avoir 2 ressources d'une même image:
    une basse résolution et une haute résolution.
  </p>
</BasicSlide>
