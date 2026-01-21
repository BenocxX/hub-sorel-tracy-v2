import type { Presentation } from '@prisma/client';
import type { Component } from 'svelte';
import { makeWeb1PresentationComponents } from './web1-a2025';
import { makeWeb3PresentationComponents } from './web3-a2025';
import { makePoo2PresentationComponents } from './poo2-a2025';
import { makeProceduralPresentationComponents } from './procedural-h2026';

type PresentationComponent = {
  id: string;
  component: Component;
};

const presentationComponents: PresentationComponent[] = [
  ...makeWeb1PresentationComponents(),
  ...makeWeb3PresentationComponents(),
  ...makePoo2PresentationComponents(),
  ...makeProceduralPresentationComponents(),
];

export function getPresentationComponent(presentation: Presentation) {
  return presentationComponents.find((pc) => pc.id === presentation.componentId)?.component;
}

export function getAllPresentationComponents() {
  return presentationComponents;
}
