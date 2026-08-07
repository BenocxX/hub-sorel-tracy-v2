<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    MultiCodeBlock,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <p>
    <Bold>Regrouper les méthodes similaires en injectant un paramètre</Bold>. Si vous avez plusieurs
    méthodes qui font sensiblement la même opération, mais avec des valeurs différentes, faites une
    seule méthode qui prendra un paramètre. Si vous devez faire copier / coller depuis une méthode
    de la classe pour en créer une autre, c'est un signe qu'un regroupement est possible.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public void augmenterDeCinqPourcent() { ... }
public void augmenterDeDixPourcent() { ... }
public void augmenterDeQuinzePourcent() { ... }`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public void augmenter(int pourcent) {
    ...
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Une méthode doit <Bold>avoir une responsabilité unique</Bold>. Écrivez toujours ce que fait la
    méthode comme nom. Si un <Bold>"et"</Bold> se glisse dans le nom, il est temps de la découper !
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public void calculerEtAfficherResultats() {
    ...
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public void calculerResultats() {
    ... 
}

public void afficherResultats() {
    ...
}`,
      },
      {
        language: 'Java',
        label: 'Bon (dans une classe)',
        code: `public void traiterResultats() {
    calculerResultats();
    afficherResultats();
}

private void calculerResultats() {
    ... 
}

private void afficherResultats() {
    ...
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Préserver un objet complet en paramètre</Bold>. Si vous devez passer plusieurs propriétés
    d'un objet en paramètre à une méthode, simplifier le tout en passant directement l'objet
    complet.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int getPlanificationSelonTemperature() {
    int plusBas = temperature.getPlusBas();
    int plusHaut = temperature.getPlusHaut();
    TemperatureFormat format = temperature.getFormat();
    return planifier(plusBas, plusHaut, format);
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public int getPlanificationSelonTemperature() {
    return planifier(temperature);
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      <Bold>Limiter le nombre de paramètres</Bold>. Un argument indique une information nécessaire
      que l'appelant doit fournir. Plus il y a de paramètres, plus l'appel est complexe.
    </li>
    <li>
      <Bold>Utiliser des méthodes privées</Bold>. Si une méthode n'est pas destinée à être utilisée
      en dehors de la classe, n'oubliez pas de la rendre privée et ainsi la rendre disponible
      uniquement à l'interne.
    </li>
    <li>
      <Bold>Ne pas retourner de type arbitraire</Bold> comme
      <InlineCodeBlock>Object</InlineCodeBlock>. Éviter de retourner des types beaucoup trop
      génériques qui vont forcer l'appelant à faire un <Italic>casting</Italic>.
    </li>
  </List>
</BasicSlide>
