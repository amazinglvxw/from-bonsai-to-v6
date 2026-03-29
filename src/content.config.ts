import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const chapters = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/chapters" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    chapter: z.number(),
    accent: z.string().default("tertiary"),
    readingTime: z.string().default("12 min"),
    date: z.string().default("2026-03"),
    lang: z.enum(["zh", "en"]).default("en"),
  }),
});

export const collections = { chapters };
