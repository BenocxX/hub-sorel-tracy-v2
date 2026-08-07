<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    BoldItalic,
    CodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>Tous les langages de programmation suivent certains standards.</p>
  <p class="fragment">
    L'écriture du code C se fait en suivant le standard <BoldItalic>camelCase</BoldItalic>.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`#include <stdio.h>
    
void calculateTaxes(double price) {
    double tax = price * 0.15;
    printf("Tax: %.2f\\n", tax);
}
  
int main() {
    double bananaPrice = 1.0;
    calculateTaxes(bananaPrice);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Le second standard fréquemment utilisé est le <BoldItalic>snake_case</BoldItalic>. Toutefois,
    dans le cadre du cours, nous allons utilisé <BoldItalic>camelCase</BoldItalic>.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`#include <stdio.h>

void calculate_taxes(double price) {
    double tax = price * 0.15;
    printf("Tax: %.2f\\n", tax);
} 

int main() {
    double banana_price = 1.0;
    calculate_taxes(banana_price);
    return 0;
}`}
  />
</BasicSlide>
