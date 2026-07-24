import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects span data science, product, and design — the categories are what
// make the range read as one practice rather than separate résumé buckets.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),               // one-line card summary
    categories: z.array(z.string()), // e.g. ["Data Science", "Product"]
    metricValue: z.string(),         // headline stat, e.g. "500+"
    metricLabel: z.string(),         // e.g. "Students Surveyed"
    timeline: z.string(),            // e.g. "10 weeks" / "Ongoing"
    team: z.string(),                // e.g. "10 members" / "12 students + PI"
    tools: z.array(z.string()).default([]),
    href: z.string().optional(),     // external live link (renders with ↗)
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// A running log of what Aishwari is currently working on / learning / reading.
// Add an update by dropping a new markdown file in src/content/updates/.
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    date: z.string(), // YYYY-MM-DD
    title: z.string(),
    tag: z.enum(['building', 'learning', 'reading', 'shipping', 'thinking']).default('building'),
  }),
});

export const collections = { projects, updates };
