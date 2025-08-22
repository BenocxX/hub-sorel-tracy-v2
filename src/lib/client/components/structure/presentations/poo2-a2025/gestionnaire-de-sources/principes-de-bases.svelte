<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    BoldItalic,
    Image,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import GitDiagram from './git-diagram.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Les gestionnaires de source suivent un ensemble de principes. Il existe sensiblement deux
      types de gestionnaires : centralisé et décentralisé. La présentation se concentre sur le
      deuxième type puisque Git et décentralisé. La mécanique est simple :
    {/snippet}
    <li>
      Il existe deux répertoires (<Italic>repositories</Italic>) : un local et un distant (<Italic
        >remote</Italic
      >).
    </li>
    <li>Lorsque le développeur travaille, il le fait sur sa copie locale.</li>
    <li>Une fois qu'il a terminé, il pousse son travail vers le répertoire distant.</li>
  </List>
  <p>Un gestionnaire de source permet d'éliminer ces problématiques !</p>
</BasicSlide>
<BasicSlide>
  <Image src={GitDiagram} alt="Diagramme de Git" class="w-full" />
</BasicSlide>
<BasicSlide>
  <p>
    La copie locale vient évidemment du répertoire distant. Pour aller chercher les nouvelles
    sources depuis le serveur centralisé, on effectue un <BoldItalic>pull</BoldItalic>. Cette action
    ira chercher toutes les dernières modifications publiées sur le serveur distant pour les
    intégrer au répertoire local.
  </p>
  <p>
    Dans le cas d'un conflit, le gestionnaire demandera au développeur ce qu'il désire faire
    (effacer son travail, combiner les fichiers ou ne pas considérer la nouvelle version). Le
    développeur peut <Italic>pull</Italic> n'importe quelle version.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Une fois que la copie locale existe, le développeur peut faire tout ce qu'il veut et cela n'aura
    aucun impact sur le véritable code stocké à distance. Traditionnellement, le développeur fait sa
    fonctionnalité ou sa modification puis <BoldItalic>push</BoldItalic> (pousse) son code vers le répertoire
    distant.
  </p>
  <p>
    Ce qui a comme résultat de rendre le nouveau code disponible à tous les développeurs du projet.
    Ceux-ci seront informés et pourront faire un <BoldItalic>pull</BoldItalic> pour mettre à jour leurs
    fichiers. Encore une fois, si un conflit survient lors du <BoldItalic>push</BoldItalic>, les
    mêmes choix se présentent au développeur.
  </p>
  <p>
    Lorsque le développeur veut effectuer une modification dans sa copie locale, il fait un <BoldItalic
      >commit</BoldItalic
    >.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Concrètement, le développeur modifie le code jusqu'à ce qu'il aille terminer une fonctionnalité
    ou un correctif. Une fois fait, il <Italic>commit</Italic> son travail dans son répertoire local.
    Il poursuit ensuite le reste de ses fonctionnalités.
  </p>
  <p>
    Le développeur peut alors accumuler plusieurs <Italic>commits</Italic> dans sa journée. Chaque
    <Italic>commit</Italic> étant accompagné d'un commentaire, il devient facile de faire le suivi du
    nouveau code. Une fois qu'il a accumulé assez de <Italic>commits</Italic>, il fait un
    <Italic>push</Italic> pour envoyer tout le nouveau code vers le répertoire distant et ainsi informer
    les autres de son travail. Sa contribution est alors mise à jour.
  </p>
</BasicSlide>
