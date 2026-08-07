<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import OutsideLink from '$lib/client/components/utils/outside-link.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 8 });
</script>

<BasicSlide>
  <p>
    Pour effectuer une requête AJAX, il faut utiliser l'objet
    <InlineCodeBlock>XMLHttpRequest</InlineCodeBlock> ou l'API
    <InlineCodeBlock>fetch</InlineCodeBlock>. Voici un exemple de requête AJAX utilisant
    <InlineCodeBlock>XMLHttpRequest</InlineCodeBlock> afin d'obtenir le contenu d'un fichier :
  </p>
  <CodeBlock
    language="JS"
    lines="|1|3-7|4-6|9|10|"
    code={`const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

xhttp.open("GET", "hello-world.html");
xhttp.send();`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est aussi possible d'appeler un serveur externe en fournissant l'URL du serveur dans la
    méthode <InlineCodeBlock>open</InlineCodeBlock>. Voici un exemple :
  </p>
  <CodeBlock
    language="JS"
    lines="|5|"
    code={`const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

xhttp.open("GET", "https://hub-sorel-tracy.mathiscote.ca/api/users");
xhttp.send();`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Maintenant qu'on a vu comment faire des requêtes AJAX avec <InlineCodeBlock
      >XMLHttpRequest</InlineCodeBlock
    >, voyons comment faire la même chose avec l'API <InlineCodeBlock>fetch</InlineCodeBlock>. La
    solution <InlineCodeBlock>fetch</InlineCodeBlock> est plus moderne et plus simple à utiliser. Voici
    comment elle fonctionne :
  </p>
  <CodeBlock
    language="JS"
    lines="|1|2-4|5-7|8-10|"
    code={`fetch("hello-world.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error("Il y a eu un problème avec la requête fetch:", error);
  });`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible réduire encore plus cette syntaxe en utilisant les
    <Italic>Arrow Function</Italic>:
  </p>
  <CodeBlock
    language="JS"
    code={`fetch("hello-world.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Il y a eu un problème avec la requête fetch:", error);
  });`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible réduire encore plus cette syntaxe en utilisant les
    <Italic>Arrow Function</Italic>:
  </p>
  <CodeBlock
    language="JS"
    code={`fetch("hello-world.html")
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Il y a eu un problème avec la requête fetch:", error));`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Finalement, la dernière méthode et la plus moderne/populaire est d'utiliser la syntaxe
    <InlineCodeBlock>async/await</InlineCodeBlock>. Voici comment cela fonctionne :
  </p>
  <CodeBlock
    language="JS"
    code={`async function fetchData() {
  try {
    const response = await fetch("hello-world.html");
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Il y a eu un problème avec la requête fetch:", error);
  }
}

fetchData();`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Vous remarquerez que, lorsqu'on effectue une requête à
    <OutsideLink href="https://hub-sorel-tracy.mathiscote.ca/api/users">
      https://hub-sorel-tracy.mathiscote.ca/api/users
    </OutsideLink>, la réponse est en format JSON. Cela signifie que nous pouvons facilement
    manipuler les données renvoyées par le serveur.
  </p>
  <CodeBlock
    language="JS"
    code={`async function fetchData() {
  try {
    const response = await fetch("https://hub-sorel-tracy.mathiscote.ca/api/users");
    const data = await response.json();

    for (const user of data) {
      console.log(\`Prénom: \${user.firstname}, Nom: \${user.lastname}\`);
    }
  } catch (error) {
    console.error("Il y a eu un problème avec la requête fetch:", error);
  }
}

fetchData();`}
  />
</BasicSlide>
