# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev          # Start dev server (hot reload, no build needed)
bun run build        # Production build (runs prisma generate first)
bun run check        # Svelte type checking
bun run lint         # Prettier + ESLint check
bun run format       # Auto-format all files

bunx prisma migrate dev      # Apply schema changes + regenerate client
bunx prisma migrate deploy   # Apply migrations in production (no codegen)
bunx prisma generate         # Regenerate Prisma client after schema changes
bunx prisma studio           # Visual DB browser
```

There are no tests. `bun run check` is the closest equivalent — run it after significant changes.

**Dependency updates:** Use `bun update <package>` but beware it may update transitive deps. If `esbuild` breaks after an update, run `rm -rf node_modules/esbuild node_modules/@esbuild && bun install` to fix it.

## Architecture

### Tech stack
Svelte 5 + SvelteKit 2, TailwindCSS, bits-ui (shadcn-svelte), Prisma + PostgreSQL, Reveal.js for presentations. Runtime: Bun (dev), Node.js + PM2 + Nginx (prod on EC2 ARM).

### Route structure
```
src/routes/
├── (public)/
│   ├── (auth)/          # /login, /register, /discord/callback — redirects away if already authed
│   └── program/         # Public curriculum page
├── savant/              # Entire dashboard — requires auth (enforced by handleGuard)
│   ├── courses/[courseId=number]/presentations/[presentationId=number]/
│   ├── teacher/         # Teacher+ only
│   └── admin/           # Admin only
└── api/                 # Public API endpoints
```

### Server hooks (src/hooks.server.ts)
Three hooks run in sequence via `sequence()`:
1. **handleSession** — reads session cookie, populates `event.locals.user`
2. **handleGuard** — route-based access control (public/dashboard/teacher/admin guards + course membership check)
3. **handlePublicApi** — handles unauthenticated API routes

### Presentation system
Presentations are Svelte components registered by a string `componentId` that must match the `componentId` column in the `Presentation` DB table. The viewer resolves which component to render via `getPresentationComponent()` in `src/lib/client/components/structure/presentations/index.ts`.

**To add a presentation:**
1. Create `src/lib/client/components/structure/presentations/[course]-[semester]/[topic]/`
2. Write slide `.svelte` files using primitives from `src/lib/client/components/revealjs/custom/` (see below)
3. Create `presentation.svelte` — set `currentPresentation.title`, call `initializeSlideLinks()`, wrap slides in `<PresentationRoot>`
4. Register in `[course]/index.ts` with `{ id: 'course-topic', component: YourPresentation }`
5. Register that course's `index.ts` in the root `presentations/index.ts` (already done for existing courses)
6. Insert a `Presentation` row in the DB with a matching `componentId`

**To add a new course:** create a new `[course]-[semester]/` folder, add an `index.ts` with a `make[Name]PresentationComponents()` function, and import it in the root `index.ts`.

### Slide primitives (src/lib/client/components/revealjs/custom/)
- `<PresentationRoot>` — Reveal.js wrapper, must be the root of every `presentation.svelte`
- `<BasicSlide title section links>` — standard slide; reads `section` via context set by `setSlideSection()`
- `<TitleSlide>` — intro/cover slide
- `<CodeBlock code language fileName lines>` — syntax-highlighted code with optional copy button and demo dialog
- `<MultiCodeBlock codes>` — tabbed multi-language code block
- `<List>` — bullet list
- `<Image>` — image with optional caption
- `<TextAndImageSlide>` — side-by-side text + image layout
- `<QuoteBlock>` — styled quote
- `<Bold>`, `<Italic>`, `<Underline>`, `<BoldItalic>`, `<InlineCodeBlock>` — inline text formatting

Each slide file calls `setSlideSection(section)` at the top to register its section for the table of contents.

### Sidebar component pattern
bits-ui triggers (`DropdownMenu.Trigger`, `Dialog.Trigger`, `Sheet.Trigger`, `Tooltip.Trigger`) must always use the `{#snippet child({ props })}` pattern to avoid `<button>` inside `<button>` invalid HTML nesting. Never put a `<Button>` component directly as a child of a trigger — pass it through the snippet.

When the sidebar is collapsed to icon mode, use `group-data-[collapsible=icon]:hidden` to hide elements that should not appear in icon mode.

### Database schema summary
- `User` → has one `Student` or `Teacher` (role-based profile), many `Session`s
- `Course` → belongs to `SchoolSession`, has many `Teacher`s, `Student`s, `Presentation`s
- `Presentation` → has `componentId` linking it to a Svelte component, `isLocked` controls student visibility
- `SchoolSession` → has `year`, `season` (Fall/Winter/Summer), `isCurrent` flag

### Deployment
CI/CD via GitHub Actions (`.github/workflows/deploy.yml`): builds on ubuntu-24.04-arm (cloud), deploys via self-hosted runner on EC2. Build artifacts are tar'd and transferred. Migrations run with `prisma migrate deploy` (not `dev`) in production. Process managed by PM2.
