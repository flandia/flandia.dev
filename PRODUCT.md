# Product: flandia.dev

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

General visitors are the primary audience, as confirmed during project setup.
The site lets visitors learn about Harry Y. H. Li / 李裕康 (Flandia), browse
his research, engineering, teaching, and project experience, and follow links
to his work or contact him.

## Product Purpose

A personal, résumé-style website presenting the author's background, interests,
education, achievements, experience, skills, projects, and friends. The existing
introduction describes a developer, learner, and researcher based at HKUST,
Hong Kong SAR.

## Operating Context

Visitors browse one main page, expand entries and projects for details, follow
external links, and use email or social links. The page also supports printing
as an A4 résumé, with expanded details and print-specific visibility rules.

## Capabilities and Constraints

- Sections cover About, Education, Awards & Achievements, Research Experiences,
  Work Experiences, Other Experiences, Skills, Projects, and Friends.
- Giscus provides comments after the main content.
- The existing site supports responsive layouts, system light/dark mode,
  keyboard interaction, disclosure controls, and reduced-motion behavior.
- Content is authored in React/TypeScript with inline Markdown. Existing
  experience, dates, affiliations, project claims, and outbound destinations
  are factual content; changes require evidence or the author's direction.
- Audience priority beyond general visitors, conversion targets, and additional
  brand commitments remain undecided.

## Evidence on Hand

- `README.md`: project description and attribution to the original CV project.
- `src/data/Head.tsx`: identity, introduction, location, and contact links.
- `src/data/Body.tsx`: résumé sections, experience, achievements, and projects.
- `src/data/Friends.tsx`: friends and their links.
- `src/app/page.tsx`: the homepage and skip-to-content navigation.
- `src/app/layout.tsx`: site metadata and language.
- `src/app/globals.css`: current theme, text styles, and print behavior.
- `src/components/`: existing disclosures, project presentation, comments,
  and reusable UI primitives.
- `public/avatar.jpg` and `public/avatar2.jpg`: existing portrait assets.
