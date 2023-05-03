// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const speisekarte_site = defineCollection({
	schema: z.object({
		title: z.string(),
		seo_title: z.string(),
		seo_desc: z.string(),
		csv: z.string(),
		order: z.number(),
	}),
});

const speisekarte_kategorien = defineCollection({
	schema: z.object({
		title: z.string(),
		kategorie: z.string(),
		order: z.number(),
	}),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	speisekarte_site: speisekarte_site,
	speisekarte_kategorien: speisekarte_kategorien,
};
