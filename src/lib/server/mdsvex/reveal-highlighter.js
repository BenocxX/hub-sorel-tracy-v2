// @ts-nocheck
/**
 * Custom mdsvex highlighter for Reveal.js presentations.
 *
 * Outputs <pre><code class="language-*" data-trim data-noescape> which
 * Reveal.js's Highlight plugin processes at runtime — consistent with
 * how code-source.svelte works for existing presentations.
 *
 * @param {string} code - Raw source code
 * @param {string | undefined} lang - Language identifier (e.g. 'c', 'js')
 * @returns {string} HTML string
 */
export function revealHighlighter(code, lang) {
  const langClass = lang ? `language-${lang}` : '';

  // Must escape HTML entities AND Svelte template delimiters so code like
  // `i < n`, `ptr = &x`, or function braces `{ }` don't break the
  // Svelte template during mdsvex compilation.
  // Order matters: & must be replaced first to avoid double-escaping.
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');

  return `<pre><code class="${langClass}" data-trim data-noescape>${escaped}</code></pre>`;
}
