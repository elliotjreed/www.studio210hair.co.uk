import { fail } from '@sveltejs/kit';
import { services } from '$lib/data/services';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Flatten services for dropdown
	const flatServices = services.flatMap((cat) =>
		cat.items.map((item) => ({
			...item,
			category: cat.category
		}))
	);

	return {
		services: flatServices
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const phone = data.get('phone');
		const service = data.get('service');
		const date = data.get('date');
		const time = data.get('time');
		const notes = data.get('notes');

		// Validation
		if (!name || !email || !phone || !service || !date || !time) {
			return fail(400, {
				error: 'Please fill in all required fields',
				formData: { name, email, phone, service, date, time, notes }
			});
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.toString())) {
			return fail(400, {
				error: 'Please provide a valid email address',
				formData: { name, email, phone, service, date, time, notes }
			});
		}

		// TODO: Send confirmation email and notification to salon
		// TODO: Store booking in database or integrate with booking system
		console.log('Booking request:', { name, email, phone, service, date, time, notes });

		return { success: true };
	}
} satisfies Actions;
