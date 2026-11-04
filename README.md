# flandia.dev

A résumé-style personal site built with Next.js, React, Tailwind CSS, and inline markdown-authored content.

## Impeccable

[Impeccable](https://github.com/pbakaus/impeccable) 4.8.0 is installed for Codex
in `.agents/skills/impeccable`. Its main skill includes the design commands;
separate command skills are optional shortcuts.

`PRODUCT.md` records the site's context and general visitor audience.
`.impeccable/config.json` selects visual mockups first for future landing pages
and showcase surfaces. Live mode targets `src/app/layout.tsx` through
`.impeccable/live/config.json`.

After installation, reload Codex to refresh its skill list. Open `/hooks` and
approve the project hook in `.codex/hooks.json` to activate automatic design
checks. The Windows engine downloads and verifies itself on first use if absent.

Example requests in Codex:

- `$impeccable critique src/app/page.tsx`
- `$impeccable polish the projects section`
- `$impeccable live` (start `bun run dev` first)

Update this installation from the project root:

```powershell
npx impeccable update --scope=project
```

Commit the skill, hook manifest, `PRODUCT.md`, and shared `.impeccable` config.
Future `DESIGN.md`, `.impeccable/design.json`, surface briefs, and critique
records also belong in the repository; runtime output and local overrides do not.

## Credits

This project is originated from https://github.com/BartoszJarocki/cv.
