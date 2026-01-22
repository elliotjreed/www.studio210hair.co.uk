<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import emailjs from '@emailjs/browser';
	import type { ActionData } from '../../routes/contact/$types';
	import { emailjsConfig, isEmailJSConfigured } from '$lib/config/emailjs';

	interface Props {
		form: ActionData | null;
	}

	let { form }: Props = $props();
	let isSubmitting = $state(false);
	let submitStatus = $state<{ type: 'success' | 'error'; message: string } | null>(null);
	let formElement: HTMLFormElement;
	let emailJSReady = $state(false);

	onMount(() => {
		// Initialize EmailJS if configured
		if (isEmailJSConfigured()) {
			emailjs.init(emailjsConfig.publicKey);
			emailJSReady = true;
		}
	});

	async function handleSubmit(event: Event) {
		event.preventDefault();

		if (!emailJSReady) {
			// Fallback to server-side form submission
			formElement.submit();
			return;
		}

		isSubmitting = true;
		submitStatus = null;

		const formData = new FormData(formElement);
		const templateParams = {
			from_name: formData.get('name'),
			from_email: formData.get('email'),
			phone: formData.get('phone') || 'Not provided',
			message: formData.get('message')
		};

		try {
			await emailjs.send(
				emailjsConfig.serviceId,
				emailjsConfig.templateId,
				templateParams
			);

			submitStatus = {
				type: 'success',
				message: "Thank you for your message! We'll be in touch soon."
			};

			// Reset form
			formElement.reset();
		} catch (error) {
			console.error('EmailJS error:', error);
			submitStatus = {
				type: 'error',
				message: 'Sorry, there was an error sending your message. Please try again or call us directly.'
			};
		} finally {
			isSubmitting = false;
		}
	}
</script>

<form
	bind:this={formElement}
	method="POST"
	use:enhance
	class="space-y-6"
	onsubmit={handleSubmit}
>
	{#if submitStatus?.type === 'success' || form?.success}
		<div class="rounded border border-green-200 bg-green-50 px-4 py-3 text-green-800" role="status">
			{submitStatus?.message || "Thank you for your message! We'll be in touch soon."}
		</div>
	{/if}

	{#if submitStatus?.type === 'error' || form?.error}
		<div class="rounded border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
			{submitStatus?.message || form?.error}
		</div>
	{/if}

	<div>
		<label for="name" class="mb-2 block text-sm font-medium text-gray-700">
			Name <span class="text-red-600" aria-label="required">*</span>
		</label>
		<input
			type="text"
			id="name"
			name="name"
			value={form?.name || ''}
			required
			aria-required="true"
			class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[var(--color-gold)]"
		/>
	</div>

	<div>
		<label for="email" class="mb-2 block text-sm font-medium text-gray-700">
			Email <span class="text-red-600" aria-label="required">*</span>
		</label>
		<input
			type="email"
			id="email"
			name="email"
			value={form?.email || ''}
			required
			aria-required="true"
			class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[var(--color-gold)]"
		/>
	</div>

	<div>
		<label for="phone" class="mb-2 block text-sm font-medium text-gray-700"> Phone </label>
		<input
			type="tel"
			id="phone"
			name="phone"
			value={form?.phone || ''}
			class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[var(--color-gold)]"
		/>
	</div>

	<div>
		<label for="message" class="mb-2 block text-sm font-medium text-gray-700">
			Message <span class="text-red-600" aria-label="required">*</span>
		</label>
		<textarea
			id="message"
			name="message"
			rows="5"
			required
			aria-required="true"
			class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[var(--color-gold)]"
			>{form?.message || ''}</textarea
		>
	</div>

	<button
		type="submit"
		disabled={isSubmitting}
		class="w-full rounded-lg bg-[var(--color-gold)] px-6 py-3 font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-dark)] disabled:cursor-not-allowed disabled:opacity-50"
	>
		{isSubmitting ? 'Sending...' : 'Send Message'}
	</button>
</form>
