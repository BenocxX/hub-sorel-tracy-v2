<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <p>
    Le fichier <InlineCodeBlock>docker-compose.yml</InlineCodeBlock> définit et configure plusieurs conteneurs
    Docker pour une application. Toutefois, rien nous empêche de l'utiliser même pour un seul conteneur,
    comme dans notre cas.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="YAML"
    lines="|1|3|4|5-7|8|9|10-12|13-16|"
    code={`version: "3.7"

services:
  webserver:
    build:
      context: .
      dockerfile: "./docker/services/php81/Dockerfile"
    container_name: "framework_webserver"
    restart: "always"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./:/var/www/html:cached
      - ./docker/vhosts:/etc/apache2/sites-enabled
      - ./docker/services/php81/custom.ini:/usr/local/etc/php/conf.d/custom.ini
`}
  />
</BasicSlide>
