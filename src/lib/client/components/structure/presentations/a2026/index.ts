import { makeWeb1PresentationComponents } from './web1';
import { makeWeb3PresentationComponents } from './web3';
import { makeWeb5PresentationComponents } from './web5';

export function makeA2026PresentationComponents() {
  return [
    ...makeWeb1PresentationComponents(),
    ...makeWeb3PresentationComponents(),
    ...makeWeb5PresentationComponents(),
  ];
}
