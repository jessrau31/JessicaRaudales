import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    contributions: z.string(),
    technologies: z.array(z.string()),
    github: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      })
    ),
  }),
});

export const collections = {
  projects: projectsCollection,
};