import type { Presentation } from '@prisma/client';
import IntroHtml from './web1-a2025/intro-html/presentation.svelte';
import type { Component } from 'svelte';

type PresentationComponent = {
  id: string;
  component: Component;
};

const presentationComponents: PresentationComponent[] = [
  { id: 'web1-a2025-intro-html', component: IntroHtml },
];

export function getPresentationComponent(presentation: Presentation) {
  return presentationComponents.find((pc) => pc.id === presentation.componentId)?.component;
}

export function getAllPresentationComponents() {
  return presentationComponents;
}
