import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string()
      })
    ).optional(),
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