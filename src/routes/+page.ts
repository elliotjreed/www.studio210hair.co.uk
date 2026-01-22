import { generateLocalBusinessSchema } from '$lib/utils/seo';
import { services } from '$lib/data/services';
import { reviews } from '$lib/data/reviews';
import { galleryPhotos } from '$lib/data/gallery';

export async function load() {
	// Get first few services for featured section
	const featuredServices = services.slice(0, 2).flatMap((cat) => cat.items.slice(0, 2));

	return {
		featuredServices,
		reviews,
		galleryPhotos,
		seo: {
			title: 'Expert Hair Styling & Treatments in Nottingham',
			description:
				'Studio210 offers professional hair cutting, coloring, and styling services in Bestwood Park, Nottingham. Book your appointment today for expert hair care.',
			jsonLd: generateLocalBusinessSchema()
		}
	};
}
