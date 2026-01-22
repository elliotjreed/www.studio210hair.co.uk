export const businessInfo = {
	name: 'Studio210',
	description:
		'Professional hair salon in Nottingham offering expert styling, coloring, and treatments',
	address: {
		street: '210 Beckhampton Road',
		area: 'Bestwood Park',
		city: 'Nottingham',
		postcode: 'NG5 5AP',
		country: 'United Kingdom'
	},
	contact: {
		phone: '07395 292575',
		email: 'info@studio210.co.uk'
	},
	location: {
		lat: 52.9981,
		lng: -1.1622
	},
	openingHours: [
		{ day: 'Monday', hours: '9:30am - 5:00pm', isOpen: true },
		{ day: 'Tuesday', hours: '9:30am - 5:00pm', isOpen: true },
		{ day: 'Wednesday', hours: '9:30am - 5:00pm', isOpen: true },
		{ day: 'Thursday', hours: '9:30am - 5:00pm', isOpen: true },
		{ day: 'Friday', hours: '10:00am - 5:00pm', isOpen: true },
		{ day: 'Saturday', hours: '11:00am - 3:00pm', isOpen: true },
		{ day: 'Sunday', hours: 'Closed', isOpen: false }
	],
	social: {
		instagram: 'https://instagram.com/studio210',
		facebook: 'https://facebook.com/studio210'
	}
} as const;
