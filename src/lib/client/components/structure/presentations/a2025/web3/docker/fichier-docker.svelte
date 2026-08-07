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
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Dans le cadre du cours, vous allez avoir un <InlineCodeBlock>Dockerfile</InlineCodeBlock> PHP mis
    en place pour vous. Vous ne devriez pas avoir à le modifier, mais il est important de comprendre
    son fonctionnement.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Voici le code complet du <InlineCodeBlock>Dockerfile</InlineCodeBlock> utilisé dans le cadre du cours
    (aussi disponible dans le dépôt GitHub Classroom de vos projets) :
  </p>
  <CodeBlock
    language="Dockerfile"
    lines="|1|3-7|9-10|12-14|16-18|20-22|24-33|35-37|39-43|45-46|48-49|51-52|54-55|"
    code={`FROM php:8.1-apache-bullseye

# Install utilities and libraries
RUN apt-get update && apt-get install -y 
    apt-utils wget build-essential cron git curl zip openssl dialog locales 
    libonig-dev libcurl4 libcurl4-openssl-dev zlib1g-dev libzip-dev libpq-dev libicu-dev libfreetype6-dev libjpeg62-turbo-dev libpng-dev libxml2-dev 
    && rm -rf /var/lib/apt/lists/*

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install xdebug
RUN pecl install xdebug
RUN docker-php-ext-enable xdebug

# Install APCu PHP extension
RUN pecl install apcu
RUN docker-php-ext-enable apcu --ini-name 10-docker-php-ext-apcu.ini

# Install Freetype and GD extensions
RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd

# Install PHP extensions
RUN docker-php-ext-install pdo_pgsql && 
    docker-php-ext-install pgsql && 
    docker-php-ext-install curl && 
    docker-php-ext-install zip && 
    docker-php-ext-install intl && 
    docker-php-ext-install xml && 
    docker-php-ext-install mbstring && 
    docker-php-ext-install exif && 
    docker-php-ext-install gettext

# Install Browscap (for browser detection with get_browser function)
RUN mkdir -p /usr/local/etc/php/extra/
RUN curl "http://browscap.org/stream?q=Lite_PHP_BrowsCapINI" -o /usr/local/etc/php/extra/lite_php_browscap.ini

# Install ssh2
RUN apt-get update
RUN apt-get install -y git libssh2-1 libssh2-1-dev
RUN pecl install ssh2-1.3.1
RUN docker-php-ext-enable ssh2

# Enable apache modules
RUN a2enmod rewrite headers expires

# Install french language locale
RUN locale-gen --no-archive fr_CA.UTF-8 locale -a

# Install cleanup
RUN rm -rf /usr/src/*

# Timezone
ENV TZ "America/Montreal"`}
  />
</BasicSlide>
