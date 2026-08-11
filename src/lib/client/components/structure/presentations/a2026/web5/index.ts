import IntroFrameworks from './intro-frameworks.svx';
import HistoriqueFrameworks from './historique-frameworks.svx';
import OutilsDeveloppement from './outils-developpement.svx';

export function makeWeb5PresentationComponents() {
  return [
    { id: 'web5-a2026-intro-frameworks', component: IntroFrameworks },
    { id: 'web5-a2026-historique-frameworks', component: HistoriqueFrameworks },
    { id: 'web5-a2026-outils-developpement', component: OutilsDeveloppement },
  ];
}
