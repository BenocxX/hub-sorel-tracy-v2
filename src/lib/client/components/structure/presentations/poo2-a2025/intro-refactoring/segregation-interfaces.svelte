<script lang="ts">
  import {
    BasicSlide,
    CodeBlock,
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
    Nous allons revenir plus en détail lorsque nous allons discuter des interfaces, mais
    essentiellement il s'agit de minimiser le groupement de comportement au sein d'une seule
    interface, mais plutôt de découper en plusieurs comportements.
  </p>
  <div class="fragment space-y-6 sm:space-y-10">
    <p>Mauvaise ségrégation des interfaces:</p>
    <MultiCodeBlock
      codes={[
        {
          language: 'Java',
          label: 'IPayable',
          code: `public interface IPayable {
    void payWithDebitCard();
    void payWithCreditCard();
    void payWithPaypal();
}`,
        },
        {
          language: 'Java',
          label: 'CardPaymentProcessor',
          code: `public class CardPaymentProcessor implements IPayable {
    public void payWithDebitCard() {
        // Process...
    }

    public void payWithCreditCard() {
        // Process...
    }

    public void payWithPaypal() {
        // ?????
    }
}`,
        },
      ]}
    />
  </div>
</BasicSlide>
<BasicSlide>
  <p>Bonne ségrégation des interfaces:</p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'IDebitCardPayable',
        code: `public interface IDebitCardPayable {
    void payWithDebitCard();
}`,
      },
      {
        language: 'Java',
        label: 'ICreditCardPayable',
        code: `public interface ICreditCardPayable {
    void payWithCreditCard();
}`,
      },
      {
        language: 'Java',
        label: 'IPaypalPayable',
        code: `public interface IPaypalPayable {
    void payWithPaypal();
}`,
      },
      {
        language: 'Java',
        label: 'CardPaymentProcessor',
        code: `public class CardPaymentProcessor 
    implements IDebitCardPayable, ICreditCardPayable
{
    public void payWithDebitCard() {
        // Process...
    }

    public void payWithCreditCard() {
        // Process...
    }
}`,
      },
    ]}
  />
</BasicSlide>
