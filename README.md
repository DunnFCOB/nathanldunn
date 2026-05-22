# Personal Site

Built with Next.js + MDX, deployed to Vercel.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publishing a new post

1. Create a new file in `content/posts/` named `your-post-slug.mdx`
2. Add frontmatter at the top:

```mdx
---
title: "Your post title"
date: "2026-06-01"        # YYYY-MM-DD — controls sort order
excerpt: "One or two sentences shown on the home page and blog index."
category: "Essay"         # Optional — e.g. Essay, Notes, Report
---

Your content here. Standard Markdown works: **bold**, *italic*,
## headings, > blockquotes, `code`, and so on.
```

3. `git add . && git commit -m "new post: your title" && git push`

Vercel picks up the push and deploys automatically — usually live within 60 seconds.

## Project structure

```
content/
  posts/            ← your MDX files live here
src/
  app/
    page.tsx        ← home page (featured post + list + sidebar)
    blog/
      page.tsx      ← full blog index
      [slug]/
        page.tsx    ← individual post
    about/
      page.tsx      ← about page
  components/
    Nav.tsx         ← sticky top nav
  lib/
    posts.ts        ← reads/parses MDX files (touch rarely)
```

## Deploying to Vercel

1. Push the repo to GitHub
2. Go to vercel.com → "Add New Project" → import the repo
3. No configuration needed — Vercel detects Next.js automatically
4. Every `git push` to `main` triggers a new deploy

## Customising

- **Your name / bio**: edit `src/app/page.tsx` (sidebar) and `src/app/about/page.tsx`
- **Nav links**: edit `src/components/Nav.tsx`
- **Colors / fonts**: edit `src/app/globals.css` (the `:root` block at the top)
- **Site metadata**: edit `src/app/layout.tsx`
