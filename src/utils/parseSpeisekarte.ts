import Papa from 'papaparse';

export interface Speisekarte {
	nummer: number;
	name: string;
	beschreibung?: string;
	preis: string;
	kategorie: string;
}

export function parseSpeisekarte(csv: string) {
	const result = Papa.parse(csv, {
		header: true,
		skipEmptyLines: true,
		transformHeader: (header: string) => header.toLowerCase().replace(/ /g, '_'),
	});
	return result.data as Speisekarte[];
}
