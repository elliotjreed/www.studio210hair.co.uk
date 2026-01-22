export interface Service {
	name: string;
	price: number | string; // number for fixed price, string for "Quote" or price ranges
	duration?: number; // in minutes (optional as some services vary)
	note?: string;
	description: string;
}

export interface ServiceCategory {
	category: string;
	items: Service[];
}
