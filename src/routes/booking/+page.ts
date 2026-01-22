import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		seo: {
			title: 'Book Appointment',
			description:
				'Book your hair appointment at Studio210 in Bestwood Park, Nottingham. Choose your service and preferred time online for expert hair care.'
		}
	};
};
