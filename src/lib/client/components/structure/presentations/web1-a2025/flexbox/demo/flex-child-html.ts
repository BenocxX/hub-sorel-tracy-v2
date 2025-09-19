export function FlexChildHTML(count = 3) {
  return `<div class="parent">
  ${Array.from({ length: count }, (_, i) => `<div class="child">${i + 1}</div>`).join('\n  ')}
</div>`;
}
