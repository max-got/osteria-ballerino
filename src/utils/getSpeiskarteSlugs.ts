import { getCollection } from 'astro:content';
import { slugify } from '@utils/slugify';

export const getSpeisekarteSlugs = () => {
	const speisekarten_csvs = import.meta.glob('../speisekarte/*.csv', {
		as: 'raw',
		eager: true,
	});

	const speisekarte_slugs = Object.entries(speisekarten_csvs).map(([path]) => {
		if (!path) return;

		const slug = path?.split('/')?.pop()?.replace('.csv', '');
		if (!slug) return;

		return slugify(slug);
	});

	return speisekarte_slugs as string[];
};

export const getSpeisekarteSlugsForNavigation = async () => {
	const navObj: { slug: string; title: string }[] = [];
	const speisekarte_slugs = getSpeisekarteSlugs();

	const files = await getCollection('speisekarte_site', ({ slug }) => {
		//return first where data.slug === karte
		return speisekarte_slugs.includes(slug);
	});

	files.forEach((file) => {
		navObj.push({
			slug: file.slug,
			title: file.data.title,
		});
	});

	return navObj;
};
