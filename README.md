# gershomcharig.com

The portfolio remains plain HTML/CSS. [Eleventy](https://www.11ty.dev/docs/) generates the blog at `/notes/` and copies the portfolio into the same build.

## Development

Use Node.js 18 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Eleventy. Run `npm run build` to generate the complete website in `_site/`.

## Writing a note

Create a Markdown file in `content/notes/posts/`. The filename becomes its URL: `my-note.md` → `/notes/my-note/`.

```markdown
---
title: My note
description: A short summary for the list and RSS feed.
date: 2026-11-04
draft: true
---

Write in Markdown here.
```

Remove `draft: true` when ready to publish. Drafts are excluded from the build, note list, RSS feed, and sitemap. Dates are explicit publication dates; future dates do not automatically schedule publication. The included `first-note.md` is an unpublished authoring example. With no published posts, `/notes/` shows a coming-soon message.

Notes appear newest first. Images can live in `img/` and be referenced with an absolute path, e.g. `![Image description](/img/example.webp)`.

The RSS feed lives at `/notes/feed.xml`. The sitemap includes published notes automatically. Site metadata lives in `content/_data/site.json`.

### Demo posts

Three published demo posts provide content for customising the templates:

- `/notes/demo-typography/`: heading levels, inline text, nested lists, quotes, tables, and HTML elements.
- `/notes/demo-images-and-media/`: local images, captions, a portrait, linked images, and video.
- `/notes/demo-code/`: code fences in several languages, inline code, and long lines.

Edit their Markdown files in `content/notes/posts/`, the layouts in `content/_includes/`, and styles in `css/notes.css`. Remove the demo files or add `draft: true` before publishing your own content.

## Hosting

Configure the existing host to run `npm ci && npm run build` and publish **`_site`** instead of the repository root. The generated output contains the existing portfolio pages, fonts, images, scripts, favicons, robots.txt, sitemap, and blog. Serve directory indexes so `/notes/` and `/notes/my-note/` resolve to their `index.html` files.

This branch does not change or deploy the live site's hosting configuration.
