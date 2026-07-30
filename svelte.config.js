import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath } from 'url';
import { revealInlinePlugin } from './src/lib/server/mdsvex/reveal-inline-plugin.js';
import { revealSlidePlugin } from './src/lib/server/mdsvex/reveal-slide-plugin.js';
import { revealHighlighter } from './src/lib/server/mdsvex/reveal-highlighter.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      // Named layout — only applied to .svx files with `layout: presentation` in frontmatter
      layout: {
        presentation: fileURLToPath(
          new URL(
            './src/lib/client/components/revealjs/custom/presentation-md-layout.svelte',
            import.meta.url
          )
        ),
      },
      // revealInlinePlugin must run first — it converts inline markdown and code
      // blocks to Components.* HTML nodes before revealSlidePlugin wraps sections.
      remarkPlugins: [revealInlinePlugin, revealSlidePlugin],
      highlight: {
        highlighter: revealHighlighter,
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },

  extensions: ['.svelte', '.svx'],
};

export default config;
