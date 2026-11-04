---
title: "Demo: Code, snippets, and long lines that need somewhere to go"
description: Fenced code blocks, inline snippets, and overflow examples, with a longer title to test wrapping.
date: 2026-11-02
---
This **demo post** is a playground for code styling. The examples are illustrative; they do not add behaviour to the website.

## Inline code

Start the preview with `npm run dev`, edit `content/_includes/post.njk`, and adjust `css/notes.css`. A longer inline example such as `content/notes/posts/a-deliberately-long-filename-for-testing-line-wrapping.md` helps check small screens.

## JavaScript

```js
const notes = [
  { title: "A little bit of everything", published: true },
  { title: "An unfinished thought", published: false },
];

function publishedNotes(items) {
  return items.filter((note) => note.published);
}

console.log(publishedNotes(notes));
```

The language is recorded on each fenced block so you can add syntax highlighting later. For now, these use the template’s plain code styling.

## HTML and CSS

```html
<article class="note">
  <h1>A small observation</h1>
  <p>Something worth writing down.</p>
</article>
```

```css
.note {
  max-width: 680px;
  margin-inline: auto;
  padding: 24px;
}

.note a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
```

## Shell commands

```sh
npm ci
npm run dev
# Build the static site
npm run build
```

## Structured data

```json
{
  "title": "A small observation",
  "description": "A short summary of the note.",
  "draft": true,
  "topics": ["design", "products", "process"]
}
```

## Long lines and plain text

The following line should scroll inside the code block rather than making the entire page wider.

```text
This is a deliberately long line of preformatted text designed to extend beyond the reading column so that you can check horizontal scrolling on desktop and mobile without breaking the surrounding article layout.
```

```
An unlabelled block
  preserves indentation
    and line breaks.

It should be just as readable as the labelled examples.
```

> Check the code font, padding, contrast, and scrolling. A code block should feel like part of the same article as a paragraph or an image.

Return to the [typography demo](/notes/demo-typography/) or [all notes](/notes/).
