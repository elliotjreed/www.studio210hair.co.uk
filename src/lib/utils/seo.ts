import { businessInfo } from '$lib/data/business';
import type { Review } from '$lib/types/review';

export function generateLocalBusinessSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'HairSalon',
		name: businessInfo.name,
		description: businessInfo.description,
		image: 'https://studio210.co.uk/images/salon.jpg',
		'@id': 'https://studio210.co.uk',
		url: 'https://studio210.co.uk',
		telephone: businessInfo.contact.phone,
		email: businessInfo.contact.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: businessInfo.address.street,
			addressLocality: businessInfo.address.city,
			addressRegion: businessInfo.address.area,
			postalCode: businessInfo.address.postcode,
			addressCountry: businessInfo.address.country
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: businessInfo.location.lat,
			longitude: businessInfo.location.lng
		},
		openingHoursSpecification: businessInfo.openingHours
			.filter((day) => day.isOpen)
			.map((day) => ({
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: day.day,
				opens: day.hours.split(' - ')[0],
				closes: day.hours.split(' - ')[1]
			})),
		priceRange: '££',
		sameAs: [businessInfo.social.instagram, businessInfo.social.facebook]
	};
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

export function generateReviewsSchema(reviews: Review[]) {
	const aggregateRating = {
		'@type': 'AggregateRating',
		ratingValue: '5.0',
		bestRating: '5',
		worstRating: '1',
		ratingCount: reviews.length
	};

	return {
		'@context': 'https://schema.org',
		'@type': 'HairSalon',
		name: businessInfo.name,
		url: 'https://studio210.co.uk',
		aggregateRating,
		review: reviews.map((review) => ({
			'@type': 'Review',
			author: {
				'@type': 'Person',
				name: review.reviewerName
			},
			reviewRating: {
				'@type': 'Rating',
				ratingValue: review.rating,
				bestRating: '5',
				worstRating: '1'
			},
			reviewBody: review.reviewText
		}))
	};
}
