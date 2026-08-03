#!/usr/bin/env bun
/**
 * Scaffolds a new markdown (.svx) presentation: creates the presentation
 * file and registers it in the course's index.ts. Does NOT insert the
 * Presentation DB row (courseId lookup + DB write) — do that manually via
 * the website interface.
 *
 * Usage: bun run new-presentation <course> <topic>
 * Example: bun run new-presentation procedural-h2026 boucles-for
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PRESENTATIONS_DIR = join(
  dirname(fileURLToPath(import.meta.url)),
  '..',
  'src/lib/client/components/structure/presentations'
);

function fail(message: string): never {
  console.error(`\n${message}\n`);
  process.exit(1);
}

function listCourses(): string[] {
  return readdirSync(PRESENTATIONS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function toPascalCase(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');
}

function toDefaultTitle(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');
}

const [, , courseArg, topicArg] = process.argv;

if (!courseArg || !topicArg) {
  fail(
    `Usage: bun run new-presentation <course> <topic>\n\n` +
      `Available courses:\n${listCourses()
        .map((c) => `  - ${c}`)
        .join('\n')}\n\n` +
      `Example: bun run new-presentation procedural-h2026 boucles-for`
  );
}

const slugPattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
if (!slugPattern.test(topicArg)) {
  fail(
    `Invalid topic "${topicArg}" — use lowercase letters, digits, and hyphens only (e.g. "boucles-for").`
  );
}

const courseDir = join(PRESENTATIONS_DIR, courseArg);
if (!existsSync(courseDir) || !statSync(courseDir).isDirectory()) {
  fail(
    `Unknown course "${courseArg}".\n\nAvailable courses:\n${listCourses()
      .map((c) => `  - ${c}`)
      .join('\n')}`
  );
}

const indexPath = join(courseDir, 'index.ts');
if (!existsSync(indexPath)) {
  fail(`"${courseArg}/index.ts" not found — this course folder doesn't look wired up yet.`);
}

const topicDir = join(courseDir, topicArg);
if (existsSync(topicDir)) {
  fail(`"${courseArg}/${topicArg}" already exists.`);
}

const componentId = `${courseArg}-${topicArg}`;
const componentName = toPascalCase(topicArg);
const defaultTitle = toDefaultTitle(topicArg);

// 1. Create the .svx file
mkdirSync(topicDir, { recursive: true });
writeFileSync(
  join(topicDir, 'presentation.svx'),
  `---
title: ${defaultTitle}
layout: presentation
---

## ${defaultTitle}

Contenu du premier slide.
`
);

// 2. Register the component in the course's index.ts
let indexContent = readFileSync(indexPath, 'utf-8');

const importLine = `import ${componentName} from './${topicArg}/presentation.svx';`;
if (indexContent.includes(`import ${componentName} `)) {
  fail(
    `"${courseArg}/index.ts" already imports a component named ${componentName} — pick a different topic name.`
  );
}

const lastImportMatch = [...indexContent.matchAll(/^import .+;$/gm)].pop();
if (!lastImportMatch || lastImportMatch.index === undefined) {
  fail(`Could not find any import statements in "${courseArg}/index.ts" to anchor the new import.`);
}
const insertImportAt = lastImportMatch.index + lastImportMatch[0].length;
indexContent =
  indexContent.slice(0, insertImportAt) + `\n${importLine}` + indexContent.slice(insertImportAt);

const returnIdx = indexContent.indexOf('return [');
if (returnIdx === -1) {
  fail(`Could not find "return [" in "${courseArg}/index.ts" to anchor the new entry.`);
}
const closeMatch = indexContent.slice(returnIdx).match(/\n(\s*)\];/);
if (!closeMatch || closeMatch.index === undefined) {
  fail(`Could not find the closing "];" of the components array in "${courseArg}/index.ts".`);
}
const insertEntryAt = returnIdx + closeMatch.index;
const entryLine = `    { id: '${componentId}', component: ${componentName} },`;
indexContent =
  indexContent.slice(0, insertEntryAt) + `\n${entryLine}` + indexContent.slice(insertEntryAt);

writeFileSync(indexPath, indexContent);

// 3. Match project formatting conventions on the touched index.ts
// (prettier has no parser registered for .svx, so only the index.ts is formatted)
Bun.spawnSync(['bunx', 'prettier', '--write', indexPath], {
  stdout: 'ignore',
  stderr: 'inherit',
});

console.log(`Created ${courseArg}/${topicArg}/presentation.svx`);
console.log(`Registered as componentId "${componentId}" in ${courseArg}/index.ts`);
console.log(
  `\nNext step: create the Presentation in the teacher dashboard (course page) with ` +
    `componentId "${componentId}", linked to the right Course.`
);
