<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    CodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Comme pour tous les langages de programmation, il est possible d'ajouter des commentaires dans
    le code C afin d'expliquer certaines parties de celui-ci. Voici les deux façons d'ajouter des
    commentaires en C :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`int main() {
    // Ceci est un commentaire sur une seule ligne

    /*
      Ceci est un commentaire
      sur plusieurs lignes
    */

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est aussi possible d'écrire des commentaires de documentation afin de permettre à notre
    éditeur de code de les afficher de façon plus conviviale.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`/**
 * Affiche l'âge de l'utilisateur.
 * @param age L'âge de l'utilisateur.
 */
void afficherAge(int age) {
    printf("Vous avez %d ans!\\n", age);
}`}
  />
</BasicSlide>
