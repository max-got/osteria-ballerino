export async function getSpeisekarteCsv(csv_file_name: string) {
	const csvs = import.meta.glob(`../speisekarte/*.csv`, {
		as: 'raw',
		eager: true,
	});

	const csv = csvs[`../speisekarte/${csv_file_name}.csv`];

	if (!csv) {
		throw new Error(`Keine CSV-Datei mit dem Namen ${csv_file_name} gefunden`);
	}

	return csv;
}
