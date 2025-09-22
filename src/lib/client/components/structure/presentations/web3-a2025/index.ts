import IntroRequetesAjax from './intro-requetes-ajax/presentation.svelte';
import DebounceThrottle from './debounce-throttle/presentation.svelte';
import SimpleCaching from './simple-caching/presentation.svelte';
import OptimisationEvents from './optimisation-events/presentation.svelte';
import IntroPhp from './intro-php/presentation.svelte';

export function makeWeb3PresentationComponents() {
  return [
    { id: 'web3-a2025-intro-requetes-ajax', component: IntroRequetesAjax },
    { id: 'web3-a2025-debounce-throttle', component: DebounceThrottle },
    { id: 'web3-a2025-simple-caching', component: SimpleCaching },
    { id: 'web3-a2025-optimisation-events', component: OptimisationEvents },
    { id: 'web3-a2025-intro-php', component: IntroPhp },
  ];
}
