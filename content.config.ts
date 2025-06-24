import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        path: z.string(),
        created_at: z.string(),
        published: z.boolean().default(false),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.object({
          href: z.string(),
          label: z.string(),
        }),
        logo: z.string(),
      }),
    }),
    services: defineCollection({
      type: 'data',
      source: 'services/*.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
      }),
    }),
    budget: defineCollection({
      type: 'data',
      source: 'budget/*.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
})
