export interface BookingFormData {
	name: string;
	email: string;
	phone: string;
	service: string;
	date: string;
	time: string;
	notes?: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	phone?: string;
	message: string;
}
