import { services } from '$lib/data/services';
import { galleryPhotos } from '$lib/data/gallery';
import { generateBreadcrumbSchema } from '$lib/utils/seo';

export async function load() {
	return {
		services,
		galleryPhotos,
		seo: {
			title: 'Hair Services & Pricing',
			description:
				'Explore our full range of professional hair services including cuts, colors, highlights, balayage, and treatments. View our competitive pricing in Nottingham.',
			jsonLd: generateBreadcrumbSchema([
				{ name: 'Home', url: 'https://studio210.co.uk' },
				{ name: 'Services', url: 'https://studio210.co.uk/services' }
			])
		}
	};
}
