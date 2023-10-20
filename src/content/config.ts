// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const testimonial = defineCollection({
  type: 'content', // v2.5.0 and later
  schema:({image})=> z.object({
    name: z.string(),
    graduate: z.string(),
    title: z.string(),
    body: z.string(),
    profileImage: image().refine((img) => img.width >= 10 , {
      message: "Cover image must be at least 10 pixels wide!",
    }),
    bgColor: z.string(),
    textLight: z.string(),
    textDark: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'testimonial': testimonial,
};