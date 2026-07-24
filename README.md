# Aishwari Sirur — portfolio

A personal portfolio rendered as one **computational notebook**. Built with
[Astro](https://astro.build); static, zero-JS-by-default. Design world is
documented in [`DESIGN.md`](./DESIGN.md); product truth in [`PRODUCT.md`](./PRODUCT.md).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve the build locally
```

## Content

Content lives in `src/content/` as Markdown with frontmatter:

- `projects/*.md` — `title, kind (engineering|research|side-project), year, blurb, stack[], href?, featured, order`
- `research/*.md` — `title, venue, year, authors, blurb, href?, order`
- `writing/*.md` — `title, date, blurb, readingTime?, order`

Add a post by dropping in a new `.md` file. Set `synthetic: false` once it's
real content. The homepage shows a lean set; `/projects`, `/research`, and
`/writing` list everything.

> **Current content is synthetic placeholder** (`synthetic: true`). Replace
> before publishing — see the frontmatter of each file and swap the contact
> links in `src/layouts/Notebook.astro` + `src/pages/index.astro`.

Substack writing feed (RSS) is planned — the `/writing` index notes it.

## Deploy to Vercel

Vercel auto-detects Astro (build `astro build`, output `dist/`) — no config needed.

**Option A — Git (recommended):**

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In the [Vercel dashboard](https://vercel.com/new), "Import Project" and pick the repo.
3. Accept the detected Astro settings and deploy. Every push auto-deploys.

**Option B — CLI:**

```bash
npm i -g vercel        # once
vercel                 # preview deploy (prompts you to log in first)
vercel --prod          # production deploy
```

The CLI login is interactive — run it yourself in your terminal (e.g. type
`! vercel` in this session), since it requires your Vercel account.

Set your real domain in `astro.config.mjs` (`site:`) before the production deploy.
