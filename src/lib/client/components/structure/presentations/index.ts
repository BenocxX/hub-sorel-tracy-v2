import type { Presentation } from '@prisma/client';
import type { Component } from 'svelte';
import * as web1A2025 from './web1-a2025';
import * as web3A2025 from './web3-a2025';
import * as poo2A2025 from './poo2-a2025';

type PresentationComponent = {
  id: string;
  component: Component;
};

const presentationComponents: PresentationComponent[] = [
  { id: 'web1-a2025-intro-html', component: web1A2025.IntroHtml },
  { id: 'web1-a2025-html-semantique', component: web1A2025.HTMLSemantique },
  { id: 'web3-a2025-intro-requetes-ajax', component: web3A2025.IntroRequetesAjax },
  { id: 'poo2-a2025-intro-refactoring', component: poo2A2025.IntroRefactoring },
  { id: 'poo2-a2025-mauvaises-odeurs', component: poo2A2025.MauvaisesOdeurs },
  { id: 'poo2-a2025-gestionnaire-de-sources', component: poo2A2025.GestionnaireDeSources },
  { id: 'poo2-a2025-refactoring-de-methodes', component: poo2A2025.RefactoringDeMethodes },
  { id: 'poo2-a2025-resolution-bitwise', component: poo2A2025.ResolutionBitwise },
];

export function getPresentationComponent(presentation: Presentation) {
  return presentationComponents.find((pc) => pc.id === presentation.componentId)?.component;
}

export function getAllPresentationComponents() {
  return presentationComponents;
}
