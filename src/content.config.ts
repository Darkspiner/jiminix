import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		tech: z.array(z.string()).default([]),
		date: z.coerce.date(),
		repo: z.string().url().optional(),
		demo: z.string().url().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects };
