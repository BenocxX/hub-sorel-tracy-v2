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
 * Escape a value for use inside a double-quoted Svelte template attribute
 * (e.g. an image `src`/`alt`/`caption`).
 */
function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

/**
 * Serialize an MDAST image node to a <Components.Image> component string.
 * The markdown `title` (`![alt](url "title")`) becomes the `caption` prop.
 */
function serializeImage(node) {
  const altProp = ` alt="${escapeAttr(node.alt ?? '')}"`;
  const captionProp = node.title ? ` caption="${escapeAttr(node.title)}"` : '';
  return `<Components.Image src="${escapeAttr(node.url)}"${altProp}${captionProp} />`;
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
        case 'image':
          return serializeImage(node);
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
 * Serialize <li> items from an MDAST list node, preserving inline replacements
 * and handling nested lists recursively.
 */
function serializeListItems(items) {
  return items
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
}

/**
 * Serialize an MDAST list node to a <Components.List> component string.
 *
 * @param {object} node - MDAST list node
 * @param {boolean} fragment - If true, adds fragment={true} prop (whole list
 *   appears as one Reveal.js fragment step). Use via blockquote syntax: `> - item`.
 */
function serializeList(node, fragment = false) {
  const listType = node.ordered ? 'ol' : 'ul';
  const fragmentProp = fragment ? ' fragment={true}' : '';
  const items = serializeListItems(node.children);
  return `<Components.List listType="${listType}"${fragmentProp}>${items}</Components.List>`;
}

/**
 * Parse a fenced code block info string into a metadata object.
 *
 * Handles two forms:
 * - key="value" pairs  →  { label: 'Bien' }
 * - bare keywords      →  { fragment: true }
 *
 * Example: `c fragment label="Bien"` → { fragment: true, label: 'Bien' }
 */
function parseMeta(meta) {
  const result = {};
  if (!meta) return result;

  // Parse key="value" pairs first
  const kvRe = /(\w+)="([^"]*)"/g;
  let m;
  while ((m = kvRe.exec(meta)) !== null) {
    result[m[1]] = m[2];
  }

  // Parse bare keywords as boolean flags (strip already-matched key="value" pairs first)
  const stripped = meta.replace(/\w+="[^"]*"/g, '');
  const bareRe = /\b(\w+)\b/g;
  while ((m = bareRe.exec(stripped)) !== null) {
    if (!(m[1] in result)) {
      result[m[1]] = true;
    }
  }

  return result;
}

/**
 * Process the top-level children of an MDAST tree.
 *
 * Converts:
 * - `code` nodes with lang `quote` → <Components.QuoteBlock> html nodes
 *   (meta key="value" pairs map onto QuoteBlock props)
 * - other `code` nodes         → <Components.CodeBlock> html nodes
 *   - with bare `fragment` in meta → fragment={true} prop
 *   - `fileName="..."` / `lines="..."` meta forwarded as props
 * - Consecutive labeled `code` → <Components.MultiCodeBlock> html node
 * - `paragraph` nodes          → <p> html nodes with inline replacements
 *   - a paragraph containing only an image → <Components.Image> html node
 * - `list` nodes               → <Components.List> html nodes
 * - `heading` (depth > 2)      → <h3>/<h4>... html nodes with inline replacements
 * - `blockquote` nodes         → Reveal.js fragment wrappers:
 *     - single paragraph  → <p class="fragment">
 *     - single list       → <Components.List fragment={true}>
 *     - multiple children → <div class="fragment">
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

    // ── Quote blocks (```quote) → <Components.QuoteBlock> ────────────────────
    // Blockquote syntax (`>`) is reserved for fragments (see below), so real
    // quotes use a fenced block with the `quote` language instead. Meta
    // key="value" pairs map straight onto QuoteBlock's props, e.g.:
    //   ```quote personName="Ada Lovelace" personTitle="Mathématicienne"
    //   La machine analytique n'a aucune prétention à créer quoi que ce soit.
    //   ```
    if (node.type === 'code' && node.lang === 'quote') {
      const meta = parseMeta(node.meta);
      const fragmentProp = meta.fragment === true ? ' fragment={true}' : '';
      const personNameProp = meta.personName ? ` personName="${meta.personName}"` : '';
      const personTitleProp = meta.personTitle ? ` personTitle="${meta.personTitle}"` : '';
      const srcProp = meta.src ? ` src="${meta.src}"` : '';
      const altProp = meta.alt ? ` alt="${meta.alt}"` : '';
      const fallbackProp = meta.fallback ? ` fallback="${meta.fallback}"` : '';
      result.push({
        type: 'html',
        value: `<Components.QuoteBlock${fragmentProp}${personNameProp}${personTitleProp}${srcProp}${altProp}${fallbackProp}>${escapeText(node.value)}</Components.QuoteBlock>`,
      });
      i++;
      continue;
    }

    // ── Fenced code blocks ───────────────────────────────────────────────────
    // Collect consecutive code blocks. If they all have labels, merge into
    // MultiCodeBlock. Otherwise render as individual CodeBlocks.
    if (node.type === 'code') {
      const group = [];
      let j = i;
      while (j < nodes.length && nodes[j].type === 'code') {
        const n = nodes[j];
        const meta = parseMeta(n.meta);
        group.push({
          lang: mapLang(n.lang),
          label: meta.label,
          fileName: meta.fileName,
          lines: meta.lines,
          code: n.value,
          fragment: meta.fragment === true,
        });
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
          const fragmentProp = g.fragment ? ' fragment={true}' : '';
          const fileNameProp = g.fileName ? ` fileName="${g.fileName}"` : '';
          const linesProp = g.lines ? ` lines="${g.lines}"` : '';
          const codeProp = ` code={${JSON.stringify(g.code)}}`;
          result.push({
            type: 'html',
            value: `<Components.CodeBlock${langProp}${labelProp}${fragmentProp}${fileNameProp}${linesProp}${codeProp} />`,
          });
        }
      }

      i = j;
      continue;
    }

    // ── Paragraphs ───────────────────────────────────────────────────────────
    if (node.type === 'paragraph') {
      // A paragraph containing only an image (i.e. `![alt](url)` on its own
      // line) renders as a block-level <Components.Image> rather than being
      // wrapped in a <p>, since <Components.Image> renders a <figure>.
      if (node.children.length === 1 && node.children[0].type === 'image') {
        result.push({ type: 'html', value: serializeImage(node.children[0]) });
        i++;
        continue;
      }
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

    // ── Blockquotes → Reveal.js fragment wrappers ────────────────────────────
    //
    // Blockquotes have no presentational purpose in slides (use <QuoteBlock>
    // for actual quotes), so they're repurposed as a fragment signal:
    //
    //   > Single paragraph text      →  <p class="fragment">text</p>
    //   > - list item                →  <Components.List fragment={true}>...</>
    //   > paragraph\n> another       →  <div class="fragment"><p>...</p>...</div>
    //
    if (node.type === 'blockquote') {
      const children = node.children;

      if (children.length === 1 && children[0].type === 'paragraph') {
        // Single paragraph → fragment paragraph
        result.push({
          type: 'html',
          value: `<p class="fragment">${serializeInline(children[0].children)}</p>`,
        });
      } else if (children.length === 1 && children[0].type === 'list') {
        // Single list → fragment list (whole list appears as one step)
        result.push({
          type: 'html',
          value: serializeList(children[0], true),
        });
      } else {
        // Multiple children → fragment div wrapping all content
        const inner = walkNodes(children)
          .map((n) => (n.type === 'html' ? n.value : ''))
          .join('');
        result.push({ type: 'html', value: `<div class="fragment">${inner}</div>` });
      }

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
