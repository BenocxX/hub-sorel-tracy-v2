import IntroEtHistoire from './intro-et-histoire/presentation.svelte';
import IntroDuLangage from './intro-du-langage/presentation.svelte';
import InputOutput from './input-output/presentation.svelte';
import Tableaux from './tableaux/presentation.svelte';
import Strings from './strings/presentation.svelte';

export function makeProceduralPresentationComponents() {
  return [
    { id: 'procedural-h2026-intro-et-histoire', component: IntroEtHistoire },
    { id: 'procedural-h2026-intro-du-langage', component: IntroDuLangage },
    { id: 'procedural-h2026-input-output', component: InputOutput },
    { id: 'procedural-h2026-tableaux', component: Tableaux },
    { id: 'procedural-h2026-strings', component: Strings },
  ];
}
