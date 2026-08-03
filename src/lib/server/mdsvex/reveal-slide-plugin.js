// @ts-nocheck
/**
 * Remark plugin for mdsvex that splits a markdown presentation on ---
 * and wraps each section in a <Components.MdSlide> Svelte component.
 *
 * Rules:
 * - `---` (thematicBreak) separates slides
 * - The first `## Heading` in each section becomes the title prop
 * - That heading is removed from the slide body (BasicSlide renders it from the prop)
 * - Page numbering starts at 2: PresentationRoot auto-inserts TitleSlide (0) and TOCSlide (1)
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
          flushSlide(out, currentSection, slideIndex);
          slideIndex++;
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
 */
function flushSlide(out, nodes, slideIndex) {
  const h2Index = nodes.findIndex((n) => n.type === 'heading' && n.depth === 2);
  const h2 = h2Index !== -1 ? nodes[h2Index] : null;

  // Flatten heading children to plain text (BasicSlide's title prop is a plain
  // string, so formatting like **bold** can't survive anyway — just recover the text).
  const title = h2 ? flattenText(h2.children) : `Slide ${slideIndex + 1}`;

  // +2 accounts for TitleSlide (page 0) and TableOfContentSlide (page 1)
  // auto-prepended by PresentationRoot
  const page = slideIndex + 2;

  // Remove the h2 from the body; BasicSlide renders the title in its own header
  const body = h2Index !== -1 ? nodes.filter((_, i) => i !== h2Index) : nodes;

  out.push({
    type: 'html',
    value: `<Components.MdSlide title={${JSON.stringify(title)}} page={${page}}>`,
  });
  out.push(...body);
  out.push({ type: 'html', value: '</Components.MdSlide>' });
}
