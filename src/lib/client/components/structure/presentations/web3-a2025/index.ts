import IntroRequetesAjax from './intro-requetes-ajax/presentation.svelte';
import OptimisationWeb from './optimistation-web/presentation.svelte';

export function makeWeb3PresentationComponents() {
  return [
    { id: 'web3-a2025-intro-requetes-ajax', component: IntroRequetesAjax },
    { id: 'web3-a2025-optimisation-web', component: OptimisationWeb },
  ];
}
