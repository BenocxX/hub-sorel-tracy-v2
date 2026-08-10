<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 18 });
</script>

<BasicSlide>
  <p>
    Les conditions représentent l'endroit le plus commun où l'on retrouve la complexité d'un
    programme. L'écriture d'une condition peut facilement déraper lorsqu'on pense à tous les cas du
    branchement.
  </p>
  <p>
    Au moment où la rédaction s'effectue, le programmeur a en tête tout le processus d'affaires et
    toutes les variables à sa disposition. Il devient donc naturel de composer une condition
    relativement complexe rapidement sans s'en rendre compte. Il est rare que le sens recherché
    d'une condition complexe saute aux yeux.
  </p>
</BasicSlide>
<BasicSlide>
  <p><Bold>Extraire une méthode d'une condition</Bold> dont la sémantique ne saute pas aux yeux.</p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `if (date.before(DEBUT_ETE) || date.after(FIN_ETE)) {
    total = quantite * tauxHiver + serviceHiver;
} else {
    total = quantite * tauxEte;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `if (!estEte(date)) {
    total = quantite * tauxHiver + serviceHiver;
} else {
    total = quantite * tauxEte;
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>
      Créer une méthode pour la partie <InlineCodeBlock>if</InlineCodeBlock> et
      <InlineCodeBlock>else</InlineCodeBlock> d'une condition
    </Bold>. Ceci permet d'augmenter considérablement la lisibilité d'une condition. Prévois
    également que si le calcul change, il sera plus facile à maintenir.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `if (!estEte(date)) {
    // Long calcul du total pour l'hiver
} else {
    // Long calcul du total pour l'été
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `if (!estEte(date)) {
    total = calculerTotalHiver(quantite);
} else {
    total = calculerTotalEte(quantite);
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Organiser la structure des conditions le plus simplement possible</Bold>. Utilisez des
    conditions ternaires lorsque possible et n'ayez pas peur d'intervertir la logique du
    <InlineCodeBlock>if</InlineCodeBlock> et du <InlineCodeBlock>else</InlineCodeBlock> si cela contribue
    à augmenter la lisibilité.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `if (!estEte(date)) {
    total = totalHiver(quantite);
} else {
    total = totalEte(quantite);
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `total = (!estEte(date))
    ? totalHiver(quantite)
    : totalEte(quantite);`,
      },
      {
        language: 'Java',
        label: 'Meilleur',
        code: `total = (estEte(date))
    ? totalEte(quantite)
    : totalHiver(quantite);`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Consolider les conditions dans une méthode</Bold>. Si vous avez plusieurs conditions
    différentes, mais qui retourne toujours le même résultat, il est préférable d'enrober celles-ci
    dans une méthode.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public double getMontant() {
    if (age < 18) {
        return 0;
    }

    if (age > 65) {
        return 0;
    }

    if (moisInscrits < 2) {
        return 0;
    }

    // Calcul du montant ...
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public double getMontant() {
    if (estNonEligible()) {
        return 0;
    }

    // Calcul du montant ...
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Extraire des segments communs d'une condition</Bold>. Lorsqu'il y a des fragments de code
    identique pour la partie <InlineCodeBlock>if</InlineCodeBlock> et
    <InlineCodeBlock>else</InlineCodeBlock>, il suffit de l'extraire en dehors de la condition.
    Permets souvent par la suite la création d'une condition ternaire.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `if (age > 18) {
    prix *= 0.80;
    envoyer();
} else {
    prix *= 0.75;
    envoyer();
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `prix *= (age > 18) ? 0.80 : 0.75;
envoyer();`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Remplacer les conditions imbriquées par des conditions successives</Bold> lorsque c'est possible.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int calculerMontant() {
    if (estMort()) {
        resultat = montantMort();
    } else {
        if (estSeparer()) {
            resultat = montantSeparer();
        } else {
            if (estRetraite()) {
                resultat = montantRetraite();
            } else {
                resultat = montantNormal();
            }
        }
    }

    return result;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public int calculerMontant() {
    if (estMort()) {
        return montantMort();
    }
    
    if (estSeparer()) {
        return montantSeparer();
    }
    
    if (estRetraite()) {
        return montantRetraite();
    }
    
    resultat = montantNormal();
}`,
      },
      {
        language: 'Java',
        label: 'Bon (compact)',
        code: `public int calculerMontant() {
    if (estMort()) return montantMort();
    if (estSeparer()) return montantSeparer();
    if (estRetraite()) return montantRetraite();

    resultat = montantNormal();
}`,
      },
    ]}
  />
</BasicSlide>
