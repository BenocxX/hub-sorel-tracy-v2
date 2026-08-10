import { makeWeb1PresentationComponents } from './web1';
import { makeWeb3PresentationComponents } from './web3';
import { makePoo2PresentationComponents } from './poo2';

export function makeA2025PresentationComponents() {
  return [
    ...makeWeb1PresentationComponents(),
    ...makeWeb3PresentationComponents(),
    ...makePoo2PresentationComponents(),
  ];
}
