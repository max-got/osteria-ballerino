import * as _slugify from 'slugify';

export function slugify(string: string) {
	return _slugify.default(string, { lower: true, locale: 'de' });
}
