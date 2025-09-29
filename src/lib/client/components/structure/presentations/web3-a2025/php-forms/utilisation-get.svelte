<script lang="ts">
  import {
    BasicSlide,
    Italic,
    List,
    InlineCodeBlock,
    CodeBlock,
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
    Pour utiliser un formulaire en PHP, il suffit d'ajouter un formulaire HTML classique à notre
    page.
  </p>
  <List>
    {#snippet paragraph()}
      La balise <InlineCodeBlock>form</InlineCodeBlock> peut avoir les deux arguments suivants:
    {/snippet}
    <li>
      <InlineCodeBlock>method</InlineCodeBlock>: La méthode HTTP utilisée pour envoyer les données
      du formulaire. Pour envoyer des données via l'URL, on utilise la méthode
      <InlineCodeBlock>GET</InlineCodeBlock> (par défaut si l'attribut n'est pas spécifié).
    </li>
    <li>
      <InlineCodeBlock>action</InlineCodeBlock>: le chemin vers le fichier .php qui va être utiliser
      pour gérer le contenu du formulaire
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>Voici un simple formulaire HTML utilisant la méthode GET pour envoyer les données:</p>
  <CodeBlock
    language="HTML"
    code={`<form method="GET">
  <label for="firstname">Firstname</label>
  <input type="text" name="firstname" id="firstname" placeholder="Bob">

  <label for="lastname">Lastname</label>
  <input type="text" name="lastname" id="lastname" placeholder="Dole">

  <button>Submit</button>
</form>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Puisque nous n'avons pas spécifié d'attribut <InlineCodeBlock>action</InlineCodeBlock>, le
    formulaire sera envoyé à la page actuelle. Pour récupérer les données envoyées par le PHP, on
    utilise la superglobale <InlineCodeBlock>$_GET</InlineCodeBlock>. Vous pouvez afficher le
    contenu de cette superglobale avec la fonction <InlineCodeBlock>print_r()</InlineCodeBlock>:
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
print_r($_GET);
?>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Pour accéder aux valeurs des champs du formulaire, on utilise les clés associées aux champs
    (définies par l'attribut <InlineCodeBlock>name</InlineCodeBlock>):
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
  $firstname = $_GET['firstname'];
  $lastname = $_GET['lastname'];
?>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, que se passe-t-il si l'utilisateur n'a pas encore soumis le formulaire et que qu'on
    essaie d'accéder aux variables <InlineCodeBlock>$firstname</InlineCodeBlock> et
    <InlineCodeBlock>$lastname</InlineCodeBlock>? On obtiendra une erreur de type
    <Italic>Undefined array key</Italic>. Pour éviter cette erreur, on peut vérifier si les clés
    existent grâce à la fonction <InlineCodeBlock>array_key_exists()</InlineCodeBlock>:
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$firstnameKey = 'firstname';
$lastnameKey = 'lastname';

$firstname = $_GET[$firstnameKey] ?? '';
$lastname = $_GET[$lastnameKey] ?? '';
?>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Utiliser
    <InlineCodeBlock>array_key_exists($key, $_GET) ? $_GET[$key] : '';</InlineCodeBlock> à chaque fois
    qu'on veut accéder à une valeur dans <InlineCodeBlock>$_GET</InlineCodeBlock> peut rapidement devenir
    lourd. je vous recommande de créer une petite fonction utilitaire pour simplifier l'accès aux valeurs.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    De plus, vous aurez probablement remarqué que la soumission du formulaire recharge la page, donc
    vide les champs du formulaire. Vous pouvez utiliser les valeurs récupérées via
    <InlineCodeBlock>$_GET</InlineCodeBlock> pour remplir les champs du formulaire après la soumission:
  </p>
  <CodeBlock
    language="HTML"
    lines="3,6"
    code={`<form method="GET">
  <label for="firstname">Firstname</label>
  <input value="<?= $firstname ?>" type="text" name="firstname" id="firstname" placeholder="Bob">

  <label for="lastname">Lastname</label>
  <input value="<?= $lastname ?>" type="text" name="lastname" id="lastname" placeholder="Dole">

  <button>Submit</button>
</form>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Notez qu'il est important d'informer l'utilisateur si les données qu'il a entrées sont
    invalides. Par exemple, si le champ du prénom est vide, on veut afficher un message d'erreur. Le
    code pour cela peut rapidement devenir lourd, nous allons voir ensemble comment gérer cela de
    manière plus élégante plus tard dans la session.
  </p>
</BasicSlide>
