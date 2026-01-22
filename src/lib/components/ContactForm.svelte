<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../routes/contact/$types';

	interface Props {
		form: ActionData | null;
	}

	let { form }: Props = $props();
</script>

<form method="POST" use:enhance class="space-y-6">
	{#if form?.success}
		<div class="rounded border border-green-200 bg-green-50 px-4 py-3 text-green-800" role="status">
			Thank you for your message! We'll be in touch soon.
		</div>
	{/if}

	{#if form?.error}
		<div class="rounded border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
			{form.error}
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
		class="w-full rounded-lg bg-[var(--color-gold)] px-6 py-3 font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-dark)]"
	>
		Send Message
	</button>
</form>
