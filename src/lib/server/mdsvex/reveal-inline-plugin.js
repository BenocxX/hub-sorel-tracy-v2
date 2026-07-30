// @ts-nocheck

/**
 * Maps common markdown language identifiers to the CodeBlock component's
 * CodeLanguage values (which control the language badge display).
 */
const LANG_MAP = {
  c: 'C',
  js: 'JS',
  javascript: 'JS',
  ts: 'TS',
  typescript: 'TS',
  html: 'HTML',
  css: 'CSS',
  php: 'PHP',
  bash: 'Bash',
  sh: 'Bash',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  java: 'Java',
  scss: 'SCSS',
  sass: 'SASS',
  xml: 'XML',
  dockerfile: 'Dockerfile',
  makefile: 'Makefile',
};

function mapLang(lang) {
  if (!lang) return undefined;
  return LANG_MAP[lang.toLowerCase()] ?? lang;
}

/**
 * Escape text content for use in a Svelte template:
 * - Standard HTML entities (&, <, >)
 * - Svelte template delimiters ({ and }) so they're not parsed as expressions
 */
function escapeText(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

/**
 * Recursively serialize inline MDAST nodes to a Svelte template HTML string,
 * replacing standard markdown elements with their Components.* equivalents.
 *
 * Handles nesting: ***bold italic*** → <Components.Bold><Components.Italic>...</>
 */
function serializeInline(nodes) {
  return nodes
    .map((node) => {
      switch (node.type) {
        case 'text':
          return escapeText(node.value);
        case 'html':
          // Already-processed html nodes (e.g. from other plugins) — pass through
          return node.value;
        case 'inlineCode':
          return `<Components.InlineCodeBlock>${escapeText(node.value)}</Components.InlineCodeBlock>`;
        case 'strong':
          return `<Components.Bold>${serializeInline(node.children)}</Components.Bold>`;
        case 'emphasis':
          return `<Components.Italic>${serializeInline(node.children)}</Components.Italic>`;
        case 'link':
          return `<a href="${node.url}" target="_blank" rel="noopener noreferrer">${serializeInline(node.children)}</a>`;
        case 'break':
          return '<br />';
        default:
          // Fallback: serialize children if available
          return node.children ? serializeInline(node.children) : '';
      }
    })
    .join('');
}

/**
 * Serialize a MDAST list node to HTML, preserving inline element replacements
 * inside list item content.
 */
function serializeList(node) {
  const tag = node.ordered ? 'ol' : 'ul';
  const items = node.children
    .map((item) => {
      const content = item.children
        .map((child) => {
          if (child.type === 'paragraph') return serializeInline(child.children);
          if (child.type === 'list') return serializeList(child);
          return '';
        })
        .join('');
      return `<li>${content}</li>`;
    })
    .join('');
  return `<${tag}>${items}</${tag}>`;
}

/**
 * Parse key="value" pairs from a fenced code block info string.
 *
 * Example: `c label="Bien"` produces meta `label="Bien"`, parsed as { label: 'Bien' }.
 */
function parseMeta(meta) {
  const result = {};
  if (!meta) return result;
  const re = /(\w+)="([^"]*)"/g;
  let m;
  while ((m = re.exec(meta)) !== null) {
    result[m[1]] = m[2];
  }
  return result;
}

/**
 * Process the top-level children of an MDAST tree.
 *
 * Converts:
 * - `code` nodes               → <Components.CodeBlock> html nodes
 * - Consecutive labeled `code` → <Components.MultiCodeBlock> html node
 * - `paragraph` nodes          → <p> html nodes with inline replacements
 * - `list` nodes               → <ul>/<ol> html nodes with inline replacements
 * - `heading` (depth > 2)      → <h3>/<h4>... html nodes with inline replacements
 *
 * Passes through unchanged:
 * - `yaml` (frontmatter), `thematicBreak`, `heading` (depth 2 — slide title),
 *   and any existing `html` nodes.
 */
function walkNodes(nodes) {
  const result = [];
  let i = 0;

  while (i < nodes.length) {
    const node = nodes[i];

    // ── Fenced code blocks ───────────────────────────────────────────────────
    // Collect consecutive code blocks. If they all have labels, merge into
    // MultiCodeBlock. Otherwise render as individual CodeBlocks.
    if (node.type === 'code') {
      const group = [];
      let j = i;
      while (j < nodes.length && nodes[j].type === 'code') {
        const n = nodes[j];
        const meta = parseMeta(n.meta);
        group.push({ lang: mapLang(n.lang), label: meta.label, code: n.value });
        j++;
      }

      const allHaveLabels = group.length > 1 && group.every((g) => g.label !== undefined);

      if (allHaveLabels) {
        // Multiple labeled blocks → MultiCodeBlock with tabs
        const codes = group.map((g) => ({
          language: g.lang,
          label: g.label,
          code: g.code,
        }));
        result.push({
          type: 'html',
          value: `<Components.MultiCodeBlock codes={${JSON.stringify(codes)}} />`,
        });
      } else {
        // One or more unlabeled blocks → individual CodeBlocks
        for (const g of group) {
          const langProp = g.lang ? ` language="${g.lang}"` : '';
          const labelProp = g.label ? ` label="${g.label}"` : '';
          const codeProp = ` code={${JSON.stringify(g.code)}}`;
          result.push({
            type: 'html',
            value: `<Components.CodeBlock${langProp}${labelProp}${codeProp} />`,
          });
        }
      }

      i = j;
      continue;
    }

    // ── Paragraphs ───────────────────────────────────────────────────────────
    if (node.type === 'paragraph') {
      result.push({ type: 'html', value: `<p>${serializeInline(node.children)}</p>` });
      i++;
      continue;
    }

    // ── Lists ────────────────────────────────────────────────────────────────
    if (node.type === 'list') {
      result.push({ type: 'html', value: serializeList(node) });
      i++;
      continue;
    }

    // ── Sub-headings (h3, h4, …) ─────────────────────────────────────────────
    // h2 headings are left as MDAST nodes so revealSlidePlugin can extract them
    // as slide titles. h3+ are converted to html with inline replacements.
    if (node.type === 'heading' && node.depth > 2) {
      const tag = `h${node.depth}`;
      result.push({ type: 'html', value: `<${tag}>${serializeInline(node.children)}</${tag}>` });
      i++;
      continue;
    }

    // ── Blockquotes ──────────────────────────────────────────────────────────
    if (node.type === 'blockquote') {
      const inner = walkNodes(node.children)
        .map((n) => (n.type === 'html' ? n.value : ''))
        .join('');
      result.push({ type: 'html', value: `<blockquote>${inner}</blockquote>` });
      i++;
      continue;
    }

    // ── Everything else ──────────────────────────────────────────────────────
    // yaml, thematicBreak, h2 headings, existing html nodes — pass through unchanged
    result.push(node);
    i++;
  }

  return result;
}

/**
 * Remark plugin that converts markdown inline elements and code blocks into
 * Components.* Svelte component references before revealSlidePlugin wraps
 * sections in <Components.MdSlide>.
 *
 * Must run BEFORE revealSlidePlugin in the remarkPlugins array.
 */
export function revealInlinePlugin() {
  return (tree) => {
    tree.children = walkNodes(tree.children);
  };
}
