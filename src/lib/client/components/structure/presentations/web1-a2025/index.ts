import IntroHtml from './intro-html/presentation.svelte';
import HTMLSemantique from './html-semantique/presentation.svelte';
import IntroCss from './intro-css/presentation.svelte';
import Liens from './liens/presentation.svelte';
import Images from './images/presentation.svelte';
import Espacements from './espacements/presentation.svelte';
import Display from './display/presentation.svelte';
import Flexbox from './flexbox/presentation.svelte';
import Forms from './forms/presentation.svelte';

export function makeWeb1PresentationComponents() {
  return [
    { id: 'web1-a2025-intro-html', component: IntroHtml },
    { id: 'web1-a2025-html-semantique', component: HTMLSemantique },
    { id: 'web1-a2025-intro-css', component: IntroCss },
    { id: 'web1-a2025-liens', component: Liens },
    { id: 'web1-a2025-images', component: Images },
    { id: 'web1-a2025-espacements', component: Espacements },
    { id: 'web1-a2025-display', component: Display },
    { id: 'web1-a2025-flexbox', component: Flexbox },
    { id: 'web1-a2025-forms', component: Forms },
  ];
}
