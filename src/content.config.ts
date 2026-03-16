import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date().optional(),
    summary: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional()
  })
});

const games = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    href: z.string().url(),
    summary: z.string(),
    cover: z.string(),
    featured: z.boolean().default(false),
    date: z.coerce.date().optional()
  })
});

export const collections = { posts, games };
