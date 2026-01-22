import type { ServiceCategory } from '$lib/types/service';

export const services: ServiceCategory[] = [
	{
		category: 'Ladies Hair Services',
		items: [
			{
				name: 'Ladies Wet/Dry Cut',
				price: 25,
				duration: 30,
				description: 'Professional precision cut on wet or dry hair'
			},
			{
				name: 'Ladies Cut & Blow Dry',
				price: 40,
				duration: 60,
				description: 'Complete haircut with wash and professional blow dry finish'
			},
			{
				name: 'Short Blow Dry',
				price: 26,
				duration: 30,
				description: 'Professional blow dry styling for short hair'
			},
			{
				name: 'Long Blow Dry',
				price: 32,
				duration: 45,
				description: 'Professional blow dry styling for long hair'
			},
			{
				name: 'Styling Hair (No Wash)',
				price: 30,
				duration: 30,
				description: 'Expert styling on dry hair without wash'
			}
		]
	},
	{
		category: 'Colour Services',
		items: [
			{
				name: 'Half Head Foils',
				price: 65,
				duration: 90,
				description: 'Highlights on top sections using foil technique for subtle dimension'
			},
			{
				name: 'Full Head Foils',
				price: 80,
				duration: 120,
				description: 'All-over highlights using foil technique for maximum coverage'
			},
			{
				name: 'Section Foils',
				price: 52,
				duration: 60,
				description: 'Targeted highlights on specific sections for customized placement'
			},
			{
				name: 'Full Head Colour',
				price: 57,
				duration: 90,
				description: 'Complete colour coverage from roots to ends for all-over transformation'
			},
			{
				name: 'Ombre / Balayage',
				price: 67,
				duration: 120,
				description: 'Hand-painted colour technique for natural gradient or sun-kissed effect'
			},
			{
				name: 'Pre Lite Roots',
				price: 65,
				duration: 90,
				description: 'Root lightening service to maintain blonde or lift natural colour'
			},
			{
				name: 'Fashion Colours',
				price: 55,
				duration: 90,
				description: 'Vibrant creative colours including pastels, brights, and bold hues'
			},
			{
				name: 'Colour Correction',
				price: 'Quote',
				description:
					'Expert colour correction to fix unwanted tones or previous colour mishaps - priced individually'
			}
		]
	},
	{
		category: 'Perms & Texture Services',
		items: [
			{
				name: 'Unisex Perms',
				price: 'From £35',
				duration: 120,
				description: 'Traditional or modern perm services to add curl, wave, or volume to hair'
			}
		]
	},
	{
		category: 'Specialist Services',
		items: [
			{
				name: 'Afro Hair',
				price: 'Quote',
				description:
					'Specialized services for afro-textured hair including styling, treatments, and cuts - priced individually'
			}
		]
	},
	{
		category: "Children's Services",
		items: [
			{
				name: 'Childs Cuts - Under 5',
				price: 'From £10',
				duration: 20,
				description: 'Gentle and patient haircuts for children under 5 years old'
			},
			{
				name: 'Childs Cuts - Under 13',
				price: 'From £15',
				duration: 25,
				description: 'Professional haircuts for children aged 5-13 years'
			},
			{
				name: 'Childs Wash Cut & Blow Dry',
				price: 25,
				duration: 45,
				description: 'Complete service with wash, cut, and blow dry for children'
			}
		]
	},
	{
		category: 'Gents Services',
		items: [
			{
				name: 'Gents Cuts',
				price: 'From £13.50',
				duration: 25,
				description: 'Professional mens haircuts from classic to contemporary styles'
			},
			{
				name: 'Gents Colours',
				price: 'From £35',
				duration: 60,
				description: 'Colour services for men including grey coverage and fashion colours'
			}
		]
	},
	{
		category: 'Senior Discounts',
		items: [
			{
				name: 'OAPs Ladies',
				price: 'From £12.50',
				duration: 30,
				description: 'Discounted services for senior ladies including cuts and styling'
			},
			{
				name: 'OAPs Gents',
				price: 'From £12.50',
				duration: 15,
				description: 'Discounted haircut services for senior gentlemen'
			}
		]
	}
];
