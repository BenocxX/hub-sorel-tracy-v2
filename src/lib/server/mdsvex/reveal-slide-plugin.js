// @ts-nocheck
/**
 * Remark plugin for mdsvex that splits a markdown presentation on ---
 * and wraps each section in a <Components.MdSlide> Svelte component.
 *
 * Rules:
 * - `---` (thematicBreak) separates slides
 * - The first `## Heading` in each section becomes the title prop
 * - That heading is removed from the slide body (BasicSlide renders it from the prop)
 * - `## Heading {#my-id}` sets an explicit stable slide id; otherwise one is
 *   slugified from the title (see registerInTOC in utils.svelte.ts). This id
 *   is what should be used to anchor anything to a specific slide (comments,
 *   deep links, ...) — unlike `page`, it doesn't shift when slides elsewhere
 *   in the file are added/removed/reordered.
 * - Page numbering starts at 2: PresentationRoot auto-inserts TitleSlide (0) and TOCSlide (1)
 * - A heading-less section made entirely of raw markup (no markdown-derived
 *   content) is treated as already being one or more complete slides and is
 *   emitted as-is — see flushSlide's pass-through branch.
 *
 * The `Components.MdSlide` reference is resolved because the mdsvex layout
 * (`presentation-md-layout.svelte`) re-exports MdSlide as a named module export,
 * which mdsvex imports as `* as Components`.
 */
export function revealSlidePlugin() {
  return (tree) => {
    const out = [];
    let currentSection = [];
    let slideIndex = 0;

    for (const node of tree.children) {
      if (node.type === 'yaml') {
        // Preserve the frontmatter block as-is
        out.push(node);
        continue;
      }

      if (node.type === 'thematicBreak') {
        if (currentSection.length > 0) {
          if (flushSlide(out, currentSection, slideIndex)) {
            slideIndex++;
          }
        }
        currentSection = [];
      } else {
        currentSection.push(node);
      }
    }

    // Flush the final section (no trailing --- required)
    if (currentSection.length > 0) {
      flushSlide(out, currentSection, slideIndex);
    }

    tree.children = out;
  };
}

/**
 * Recursively extract plain text from MDAST inline nodes (text, inlineCode,
 * and anything nested inside strong/emphasis/etc via .children).
 *
 * @param {object[]} nodes
 * @returns {string}
 */
function flattenText(nodes) {
  return nodes
    .map((node) => {
      if (node.value !== undefined) return node.value;
      if (node.children) return flattenText(node.children);
      return '';
    })
    .join('');
}

/**
 * @param {object[]} out - Output AST node array to push into
 * @param {object[]} nodes - Nodes collected for this slide section
 * @param {number} slideIndex - Zero-based index of this slide in the file
 * @returns {boolean} true if this section consumed a slideIndex (i.e. was
 *   wrapped in exactly one MdSlide), false if it was passed through raw.
 */
function flushSlide(out, nodes, slideIndex) {
  const h2Index = nodes.findIndex((n) => n.type === 'heading' && n.depth === 2);
  const h2 = h2Index !== -1 ? nodes[h2Index] : null;

  // Pass-through: a heading-less section made ENTIRELY of raw markup the
  // author wrote directly (every node is an `html` node NOT produced by
  // revealInlinePlugin's markdown-to-Components.* conversion) is assumed to
  // already be one or more complete slides — e.g. a component invocation
  // like `<ProprietesParent section="..." />` that internally renders many
  // <BasicSlide>s sharing a Reveal.js auto-animate section (which requires
  // its own component-instance/context boundary, so it can't be expressed
  // as plain markdown wrapped in MdSlide's own <BasicSlide>). Emit as-is,
  // with no MdSlide/BasicSlide wrapper.
  //
  // Known limitation: slides produced this way aren't counted toward the
  // page numbers auto-computed for subsequent `##` slides in the same file
  // (their count isn't known until runtime), so a pass-through section
  // should either be the last content in the file, or register its own TOC
  // entries (as BasicSlide/registerInTOC already requires it to).
  if (!h2 && nodes.every((n) => n.type === 'html' && !n.generated)) {
    out.push(...nodes);
    return false;
  }

  // Flatten heading children to plain text (BasicSlide's title prop is a plain
  // string, so formatting like **bold** can't survive anyway — just recover the text).
  const rawTitle = h2 ? flattenText(h2.children) : `Slide ${slideIndex + 1}`;

  // Optional explicit stable id: "## Title {#my-id}". Without one, a slug of
  // the title is used instead (see registerInTOC in utils.svelte.ts) — an
  // explicit id is only needed to survive the title itself being reworded,
  // or to disambiguate two slides that would otherwise share a title.
  const idMatch = rawTitle.match(/\s*\{#([a-z0-9][a-z0-9-]*)\}\s*$/i);
  const explicitId = idMatch ? idMatch[1] : null;
  const title = idMatch ? rawTitle.slice(0, idMatch.index).trimEnd() : rawTitle;

  // +2 accounts for TitleSlide (page 0) and TableOfContentSlide (page 1)
  // auto-prepended by PresentationRoot
  const page = slideIndex + 2;

  // Remove the h2 from the body; BasicSlide renders the title in its own header
  const body = h2Index !== -1 ? nodes.filter((_, i) => i !== h2Index) : nodes;

  const idProp = explicitId ? ` id={${JSON.stringify(explicitId)}}` : '';
  out.push({
    type: 'html',
    value: `<Components.MdSlide title={${JSON.stringify(title)}} page={${page}}${idProp}>`,
  });
  out.push(...body);
  out.push({ type: 'html', value: '</Components.MdSlide>' });
  return true;
}
