import { getCollection, getEntryBySlug } from 'astro:content';
import { getSpeisekarteCsv } from '@utils/getSpeisekarteCsv';
import { Speisekarte, parseSpeisekarte } from '@utils/parseSpeisekarte';
import { slugify } from '@utils/slugify';

export interface GroupedSpeisekarte {
	[kategorie: string]: Speisekarte[];
}

export async function getSpeisekarteInformations(karte: string) {
	try {
		const site_md = await getEntryBySlug('speisekarte_site', karte).then(
			(file) => {
				if (!file) {
					throw new Error(`Keine Markdown-SEO-Datei für ${karte} gefunden`);
				}
				return file;
			}
		);

		const csv = await getSpeisekarteCsv(site_md.data.csv).then((csv) => {
			return parseSpeisekarte(csv);
		});

		//group by kategorie
		const results: GroupedSpeisekarte = {};
		csv.forEach((speise) => {
			if (!(speise.kategorie in results)) {
				results[speise.kategorie] = [];
			}
			results[speise.kategorie]?.push(speise);
		});

		const kategorien = new Set(csv.map((speise) => slugify(speise.kategorie)));

		const kat_md_files = await getCollection('speisekarte_kategorien')
			.then((files) => {
				return files
					.filter((file) => {
						return kategorien.has(slugify(file.data.kategorie));
					})
					.sort((a, b) => {
						return a.data.order - b.data.order;
					});
			})
			.catch((e) => {
				throw new Error(`Fehler beim parsen der Markdown-Kategorien: ${e}`);
			});

		return {
			site_md,
			results,
			kat_md_files,
		};
	} catch (e) {
		const error = e as Error;
		throw new Error(
			`Fehler beim Laden der Speisekarte : ${error?.message || error}`
		);
	}
}

export const getAllSpeisekarteInformations = async () => {
	try {
		const site_mds = await getCollection('speisekarte_site');
		const speisekartenInformations = await Promise.all(
			site_mds.map((speisekarte) => getSpeisekarteInformations(speisekarte.slug))
		).then((speisekartenInformations) => {
			return speisekartenInformations.sort((a, b) => {
				return a.site_md.data.order - b.site_md.data.order;
			});
		});

		return speisekartenInformations;
	} catch (error) {
		console.log(error);
		return null;
	}
};
