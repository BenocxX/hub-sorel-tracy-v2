<script lang="ts">
  import {
    BasicSlide,
    CodeBlock,
    InlineCodeBlock,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <p>
    La dernière utilisation d'un lien HTML sera la possibilité d'ouvrir le logiciel d'envoi de
    courriels par défaut et de préparer les champs (l'adresse courriel, le sujet, le message, etc.).
  </p>
  <p>
    On utilise le lien de façon normal avec la propriété <InlineCodeBlock>href</InlineCodeBlock> sauf
    qu'elle doit débuter par <Bold>mailto:</Bold> suivit de l'adresse courriel cible.
  </p>
  <CodeBlock
    language="HTML"
    code={`<body>
    <a href="mailto:mathis.cote@cegepst.qc.ca">Contactez-moi</a>
</body>`}
  >
    <a href="mailto:mathis.cote@cegepst.qc.ca" class="text-primary underline"> Contactez-moi </a>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible d'envoyer des paramètres à l'application qui va recevoir le
    <Bold>mailto:</Bold>. Pour se faire, on ajoute un <Bold>?</Bold> après l'adresse courriel du destinataire
    et on écrit les paramètres. Chaque paramètre doit être séparé par un
    <Bold>&</Bold>.
  </p>
  <List paragraph="Les paramètres possibles sont:">
    <li>
      <Bold>subject:</Bold> Le titre du courriel;
    </li>
    <li>
      <Bold>cc:</Bold> Adresse courriel d'une copie conforme;
    </li>
    <li>
      <Bold>bcc:</Bold> Adresse courriel d'une copie conforme invisible;
    </li>
    <li>
      <Bold>body:</Bold> Message du courriel.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Voici un exemple utilisant les paramètres <Bold>subject:</Bold> et <Bold>body:</Bold>
  </p>
  <CodeBlock
    language="HTML"
    code={`<body>
    <a href="mailto:mathis.cote@cegepst.qc.ca?subject=Bonjour&body=Bonjour%20le%20monde%20!">
      Contactez-moi
    </a>
</body>`}
  >
    <a
      href="mailto:mathis.cote@cegepst.qc.ca?subject=Bonjour&body=Bonjour%20le%20monde%20!"
      class="text-primary underline"
    >
      Contactez-moi
    </a>
  </CodeBlock>
  <p class="fragment">
    Notez que nous utilisons des <Bold>%20</Bold> pour représenter les espaces dans ce contexte. Ceci
    fait partie simplement de la représentation "échappée" d'une adresse.
  </p>
</BasicSlide>
