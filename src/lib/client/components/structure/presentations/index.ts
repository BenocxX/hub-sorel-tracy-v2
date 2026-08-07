import type { Presentation } from '@prisma/client';
import type { Component } from 'svelte';
import { makeA2025PresentationComponents } from './a2025';
import { makeH2026PresentationComponents } from './h2026';
import { makeA2026PresentationComponents } from './a2026';

type PresentationComponent = {
  id: string;
  component: Component;
};

const presentationComponents: PresentationComponent[] = [
  ...makeA2025PresentationComponents(),
  ...makeH2026PresentationComponents(),
  ...makeA2026PresentationComponents(),
];

export function getPresentationComponent(presentation: Presentation) {
  return presentationComponents.find((pc) => pc.id === presentation.componentId)?.component;
}

export function getAllPresentationComponents() {
  return presentationComponents;
}
