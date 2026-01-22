import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const phone = data.get('phone');
		const message = data.get('message');

		// Validation
		if (!name || !email || !message) {
			return fail(400, {
				error: 'Please fill in all required fields',
				name,
				email,
				phone,
				message
			});
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email.toString())) {
			return fail(400, {
				error: 'Please provide a valid email address',
				name,
				email,
				phone,
				message
			});
		}

		// TODO: Send email notification
		// For now, just log the submission
		console.log('Contact form submission:', { name, email, phone, message });

		return { success: true };
	}
} satisfies Actions;
