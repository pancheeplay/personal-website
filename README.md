# Personal Website (Astro + Markdown)

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repo includes workflow: `.github/workflows/deploy.yml`.

1. Push all source files to GitHub (do not upload `dist`).
2. In GitHub repo settings:
   - `Settings` -> `Pages`
   - `Source` = `GitHub Actions`
3. Push to `main` branch, workflow will deploy automatically.

## Add a post (no frontmatter)

1. Create one markdown file under `src/content/posts/`:

```text
src/content/posts/今天的随笔.md
```

2. Write content directly, no metadata block required.

3. If you need images, create a folder and reference with relative path:

```text
src/content/posts/今天的随笔/paper-note.svg
```

```md
![示例图](./今天的随笔/paper-note.svg)
```

## Post metadata overrides

Use `src/content/posts-meta.json` to override any default metadata.

Defaults:

- `title`: filename (without `.md`)
- `date`: file creation time (fallback to modify time)
- `summary`: hidden by default (only shown when configured)
- `featured`: `false`
- `tags`: `[]`

Override example:

```json
{
  "今天的随笔": {
    "featured": true,
    "summary": "这是一篇置顶文章"
  }
}
```

## Footnotes in Markdown

Use standard GFM footnotes (already enabled):

```md
这是一个尾注示例[^1]。

[^1]: 这是尾注内容，可点击跳转与返回。
```

## Add a game

Create file `src/content/games/<slug>.md` with:

```yaml
title: "Game Name"
href: "https://example.com"
summary: "short description"
cover: "/images/games/cover.png"
featured: false
date: 2026-03-16
```
