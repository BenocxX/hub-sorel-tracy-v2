<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    Underline,
    List,
    Image,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import ThisIsFineGif from './this-is-fine.gif';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Probablement le principe le plus important qui s'applique pour les classes et les méthodes.
    L'idée est de <Bold>forcer la classe ou la méthode à n'avoir qu'une seule responsabilité</Bold>.
    C'est le noyau de tous les autres principes et aussi des techniques de refactoring.
  </p>
  <p>
    Une <Bold>méthode devrait faire qu'une seule et unique tâche</Bold>. Pourquoi ? Une méthode est
    le point le plus creux accessible pour décrire une opération. Au final, une application est une
    série d'appels de méthodes effectuée de façon logique.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Si les méthodes sont mal conçues, les chances sont grandes pour que la classe propriétaire soit
    elle aussi défaillante. Si nous allons plus loin, les appels à cette classe pourraient eux aussi
    être en problème et ainsi de suite ...
  </p>
  <Image src={ThisIsFineGif} alt="Dog in a room full of fire" figureClass="fragment mx-auto" />
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      L'écriture correcte et de qualité d'une méthode requiert l'application de bonnes pratiques et
      de la discipline. Voici quelques pratiques à appliquer pour aider l'atteinte d'une
      responsabilité unique.
    {/snippet}
    <li>Nomenclature sémantique.</li>
    <li>Méthode courte.</li>
    <li>Nombre d'argument limité.</li>
    <li>Pas d'effet secondaire.</li>
    <li>Un seul niveau d'abstraction.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Une méthode doit avoir absolument un nom sémantique. Le nom doit symboliser exactement la
    responsabilité de la méthode et ne pas être cryptique.
  </p>
  <p>
    De la même façon, les arguments doivent eux aussi être identifiés de façon claire et précise.
    Lors de l'appel, on doit savoir immédiatement ce qu'on attend comme données d'entrés. En lisant
    le nom de la méthode, on doit savoir ce qui devrait se passer avec les arguments. Somme toute,
    <Underline>on ne doit jamais avoir de doute sur le résultat</Underline> d'une méthode.
  </p>
  <List>
    <li>
      On nomme une méthode d'action en choisissant des verbes ou des groupes verbaux tel que <InlineCodeBlock
        >save</InlineCodeBlock
      >, <InlineCodeBlock>delete</InlineCodeBlock>, <InlineCodeBlock>sendPayment</InlineCodeBlock> ou
      <InlineCodeBlock>authenticate</InlineCodeBlock>.
    </li>
    <li>
      Si vous avez des difficultés à nommer une méthode, c'est un signe qu'elle a peut-être
      plusieurs responsabilités ...
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int getcrlmt() {
    ...
}`,
      },
      {
        language: 'Java',
        label: 'Bien',
        code: `public int getCreditLimite() {
    ...
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Une méthode doit être courte</Bold>. Si vous croyez que votre méthode est assez courte,
    réduisez-la davantage ! Ceci permet de minimiser le risque d'erreurs et de respecter plus
    facilement le principe de responsabilité unique.
  </p>
  <div
    class="flex items-center justify-center gap-2 py-4 sm:gap-8 [&_*]:!text-4xl [&_*]:sm:!text-8xl"
  >
    <span class="fragment">🤡</span>
    <div class="fragment">
      <span>→</span>
      <span>🥸</span>
    </div>
    <div class="fragment">
      <span>→</span>
      <span>🙂</span>
    </div>
    <div class="fragment">
      <span>→</span>
      <span>😶</span>
    </div>
  </div>
  <p class="fragment">
    Pensez à une dissertation en français que vous devez corriger. Si elle contient 900 mots, les
    chances sont grandes pour qu'il s'y cache au moins une faute. Par contre, si on écrit une phrase
    de 5 mots, tout le monde peut se concentrer pour ne pas faire de faute.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    On tente de viser <Bold>environ 10 lignes par méthodes</Bold> incluant les accolades et la déclaration,
    mais évidemment tout dépend de la responsabilité de cette dernière, mais une méthode ne devrait pratiquement
    jamais dépasser 25 lignes.
  </p>
  <p>
    Nous verrons plus tard des techniques pour réduire les conditions qui prennent beaucoup d'espace
    dans le corps d'une méthode.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Une méthode ne doit pas avoir d'effets secondaires</Bold> ! Votre méthode ne doit pas mentir
    et porter des modifications inattendues qui n'auraient pas été annoncées dans le nom et l'intention
    de la méthode.
  </p>
  <CodeBlock
    fragment
    language="Java"
    lines="|5"
    code={`public boolean isValidUser(String email, String password) {
    for (int i = 0; i < users.length; ++i) {
        if (users[i].getEmail().equals(email) 
            && users[i].getPassword().equals(passwd)) { 
            initializeSession();
            return true;
        }
    }
    return false;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Il faut n'avoir qu'un seul niveau d'abstraction par méthode</Bold>. Ceci signifie que les
    instructions qui forment une méthode doivent toutes être du même niveau logique.
  </p>
  <CodeBlock
    fragment
    language="Java"
    label="Mauvais"
    lines="|2,4|3,5,6"
    code={`public void afficherInterface() { 
    afficherEntete();
    System.out.print("\\n-------\\n"); 
    afficherMenu(); 
    System.out.print("\\n-------\\n"); 
    System.out.println(user.getFullName());
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    (Suite) Si la tâche implique plusieurs opérations, on découpe son niveau d'abstraction pour
    former d'autres méthodes qui vont constituer des "sections". La méthode devient alors une espèce
    de table des matières.
  </p>
  <CodeBlock
    fragment
    language="Java"
    label="Bien"
    lines="|2-6"
    code={`public void afficherInterface() { 
    afficherEntete();
    afficherNouvelleLigne();
    afficherMenu(); 
    afficherNouvelleLigne();
    afficherUtilisateur(user);
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Limiter le nombre d'arguments</Bold>. Idéalement, une méthode ne devrait avoir aucun
    argument (<Italic>méthode niladique</Italic>). Par contre, si des arguments sont nécessaires, on
    tente de limiter le nombre à un (<Italic>monadique</Italic>) ou deux (<Italic>diadique</Italic
    >).
  </p>
  <p class="fragment">
    On évite les méthodes avec trois paramètres (<Italic>triadique</Italic>) ou plus (
    <Italic>polyadique</Italic>, ceux-ci nécessitent une excellente raison).
  </p>
  <List fragment>
    <li>
      Plus le nombre d'arguments est élevé, plus il sera <Bold>
        difficile de mettre la méthode sous tests
      </Bold>.
    </li>
    <li>Les arguments prennent également de la <Bold>puissance de calcul</Bold>.</li>
    <li>Un grand nombre d'arguments peut <Bold>rendre l'appel difficile et complexe</Bold>.</li>
    <li>Symptôme classique d'une méthode avec <Bold>plus d'une responsabilité</Bold>.</li>
  </List>
</BasicSlide>
