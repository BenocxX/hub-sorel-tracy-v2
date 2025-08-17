import type { Presentation } from '@prisma/client';
import * as web1A2025 from './web1-a2025';
import * as poo2A2025 from './poo2-a2025';
import type { Component } from 'svelte';

type PresentationComponent = {
  id: string;
  component: Component;
};

const presentationComponents: PresentationComponent[] = [
  { id: 'web1-a2025-intro-html', component: web1A2025.IntroHtml },
  { id: 'poo2-a2025-intro-refactoring', component: poo2A2025.IntroRefactoring },
];

export function getPresentationComponent(presentation: Presentation) {
  return presentationComponents.find((pc) => pc.id === presentation.componentId)?.component;
}

export function getAllPresentationComponents() {
  return presentationComponents;
}
