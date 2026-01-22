export interface Address {
	street: string;
	area: string;
	city: string;
	postcode: string;
	country: string;
}

export interface Contact {
	phone: string;
	email: string;
}

export interface Location {
	lat: number;
	lng: number;
}

export interface OpeningHoursDay {
	day: string;
	hours: string;
	isOpen: boolean;
}

export interface SocialMedia {
	instagram: string;
	facebook: string;
}

export interface BusinessInfo {
	name: string;
	description: string;
	address: Address;
	contact: Contact;
	location: Location;
	openingHours: OpeningHoursDay[];
	social: SocialMedia;
}
