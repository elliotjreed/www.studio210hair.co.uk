import { reviews } from '$lib/data/reviews';
import { galleryPhotos } from '$lib/data/gallery';
import { generateReviewsSchema } from '$lib/utils/seo';

export async function load() {
	return {
		reviews,
		galleryPhotos,
		seo: {
			title: 'Customer Reviews & Testimonials | Studio210 Hair Salon Nottingham',
			description:
				'Read genuine 5-star reviews from our satisfied customers at Studio210 hair salon in Bestwood Park, Nottingham. Discover why clients love our friendly, professional hair services.',
			canonical: '/reviews',
			jsonLd: generateReviewsSchema(reviews)
		}
	};
}
