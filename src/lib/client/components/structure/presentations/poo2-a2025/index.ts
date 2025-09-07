import IntroRefactoring from './intro-refactoring/presentation.svelte';
import MauvaisesOdeurs from './mauvaises-odeurs/presentation.svelte';
import GestionnaireDeSources from './gestionnaire-de-sources/presentation.svelte';
import RefactoringDeMethodes from './refactoring-de-methodes/presentation.svelte';
import RefactoringDeClasses from './refactoring-de-classes/presentation.svelte';

// Not done, used for testing animation system
import ResolutionBitwise from './resolution-bitwise/presentation.svelte';

export function makePoo2PresentationComponents() {
  return [
    { id: 'poo2-a2025-intro-refactoring', component: IntroRefactoring },
    { id: 'poo2-a2025-mauvaises-odeurs', component: MauvaisesOdeurs },
    { id: 'poo2-a2025-gestionnaire-de-sources', component: GestionnaireDeSources },
    { id: 'poo2-a2025-refactoring-de-methodes', component: RefactoringDeMethodes },
    { id: 'poo2-a2025-refactoring-de-classes', component: RefactoringDeClasses },

    // Not done, used for testing animation system
    { id: 'poo2-a2025-resolution-bitwise', component: ResolutionBitwise },
  ];
}
