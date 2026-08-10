<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    Bold,
    InlineCodeBlock,
    QuoteBlock,
  } from '$lib/client/components/revealjs/custom';
  import * as Avatar from '$lib/client/components/ui/avatar';
  import BarbaraLiskov from './Barbara_Liskov.jpg';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 17 });
</script>

<BasicSlide>
  <QuoteBlock
    imgClass="object-cover object-top"
    src={BarbaraLiskov}
    alt="Barbara Liskov"
    personName="Barbara Liskov"
    personTitle="Professeure au MIT"
  >
    Si q(x) est une propriété démontrable pour tout objet x de type T, alors q(y) est vraie pour
    tout objet y de type S tel que S est un sous-type de T.
  </QuoteBlock>
  <p class="fragment">
    Au niveau objet, ce principe signifie que <Bold>POUR une classe A</Bold> qui est
    <Bold>enfant de B</Bold>, il devrait être
    <Bold>possible de remplacer B pour A sans perturber le programme</Bold>. Il devrait aller de soi
    si vous respecter les principes d'héritage.
  </p>
  <p class="fragment">
    Par exemple, imaginez une classe <InlineCodeBlock>Voiture</InlineCodeBlock> qui a un moteur et une
    méthode pour démarrer qui initie le moteur. Imaginez ensuite une sous-classe
    <InlineCodeBlock>VoitureElectrique</InlineCodeBlock> ... qui n'a pas de moteur. La solution est de
    ne pas les faire hériter directement.
  </p>
</BasicSlide>
