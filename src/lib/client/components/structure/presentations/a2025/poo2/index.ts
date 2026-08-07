import IntroRefactoring from './intro-refactoring/presentation.svelte';
import MauvaisesOdeurs from './mauvaises-odeurs/presentation.svelte';
import GestionnaireDeSources from './gestionnaire-de-sources/presentation.svelte';
import RefactoringDeMethodes from './refactoring-de-methodes/presentation.svelte';
import RefactoringDeClasses from './refactoring-de-classes/presentation.svelte';
import TestsUnitaires from './tests-unitaires/presentation.svelte';
import GestionErreurs from './gestion-erreurs/presentation.svelte';
import QualiteLogicielle from './qualite-logicielle/presentation.svelte';
import ConceptsObjetsAvances from './concepts-objets-avances/presentation.svelte';
import Polymorphism from './polymorphism/presentation.svelte';

// Not done, used for testing animation system
import ResolutionBitwise from './resolution-bitwise/presentation.svelte';

export function makePoo2PresentationComponents() {
  return [
    { id: 'poo2-a2025-intro-refactoring', component: IntroRefactoring },
    { id: 'poo2-a2025-mauvaises-odeurs', component: MauvaisesOdeurs },
    { id: 'poo2-a2025-gestionnaire-de-sources', component: GestionnaireDeSources },
    { id: 'poo2-a2025-refactoring-de-methodes', component: RefactoringDeMethodes },
    { id: 'poo2-a2025-refactoring-de-classes', component: RefactoringDeClasses },
    { id: 'poo2-a2025-tests-unitaires', component: TestsUnitaires },
    { id: 'poo2-a2025-gestion-erreurs', component: GestionErreurs },
    { id: 'poo2-a2025-qualite-logicielle', component: QualiteLogicielle },
    { id: 'poo2-a2025-concepts-objets-avances', component: ConceptsObjetsAvances },
    { id: 'poo2-a2025-polymorphism', component: Polymorphism },

    // Not done, used for testing animation system
    { id: 'poo2-a2025-resolution-bitwise', component: ResolutionBitwise },
  ];
}
