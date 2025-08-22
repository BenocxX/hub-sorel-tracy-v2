import BasicSlide from './basic-slide.svelte';
import TextAndImageSlide from './text-and-image-slide.svelte';
import Bold from './bold.svelte';
import Italic from './italic.svelte';
import Underline from './underline.svelte';
import BoldItalic from './bold-italic.svelte';
import InlineCodeBlock from './inline-code-block.svelte';
import CodeBlock from './code-block.svelte';
import MultiCodeBlock from './multi-code-block.svelte';
import List from './list.svelte';
import Image from './image.svelte';
import QuoteBlock from './quote-block.svelte';
import { setSlideSection, type SlideSectionProps } from './utils.svelte';
import { registerInTOC } from './utils.svelte';

export {
  BasicSlide,
  TextAndImageSlide,
  Bold,
  Italic,
  Underline,
  BoldItalic,
  InlineCodeBlock,
  CodeBlock,
  MultiCodeBlock,
  List,
  Image,
  QuoteBlock,
  setSlideSection,
  registerInTOC,
  type SlideSectionProps,
};
