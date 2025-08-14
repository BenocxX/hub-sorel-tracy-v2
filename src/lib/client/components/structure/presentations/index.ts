import type { Presentation } from '@prisma/client';
import IntroHtml from './web1-a2025/intro-html/presentation.svelte';
import type { Component } from 'svelte';

type PresentationComponent = {
  folder: string;
  component: Component;
};

const presentationComponents: PresentationComponent[] = [
  { folder: 'intro-html', component: IntroHtml },
];

export function getPresentationComponent(presentation: Presentation) {
  return presentationComponents.find((pc) => pc.folder === presentation.abbreviation)?.component;
}
