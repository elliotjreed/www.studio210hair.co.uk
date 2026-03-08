<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import type { ActionData } from '../../routes/booking/$types';
	import type { Service } from '$lib/types/service';

	interface Props {
		form: ActionData | null;
		services: (Service & { category: string })[];
	}

	let { form, services }: Props = $props();

	// Pre-select service from query param if present
	const preselectedService = $page.url.searchParams.get('service') || '';
</script>

<form method="POST" use:enhance class="space-y-6">
	{#if form?.success}
		<div
			class="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800"
			role="status"
		>
			Thank you for your booking request! We'll confirm your appointment shortly.
		</div>
	{/if}

	{#if form?.error}
		<div class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
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
			value={form?.formData?.name || ''}
			required
			aria-required="true"
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
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
			value={form?.formData?.email || ''}
			required
			aria-required="true"
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
		/>
	</div>

	<div>
		<label for="phone" class="mb-2 block text-sm font-medium text-gray-700">
			Phone <span class="text-red-600" aria-label="required">*</span>
		</label>
		<input
			type="tel"
			id="phone"
			name="phone"
			value={form?.formData?.phone || ''}
			required
			aria-required="true"
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
		/>
	</div>

	<div>
		<label for="service" class="mb-2 block text-sm font-medium text-gray-700">
			Service <span class="text-red-600" aria-label="required">*</span>
		</label>
		<select
			id="service"
			name="service"
			required
			aria-required="true"
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
		>
			<option value="">Select a service...</option>
			{#each services as service}
				<option value={service.name} selected={service.name === preselectedService}>
					{service.name} - £{service.price} ({service.duration} mins)
				</option>
			{/each}
		</select>
	</div>

	<div>
		<label for="date" class="mb-2 block text-sm font-medium text-gray-700">
			Preferred Date <span class="text-red-600" aria-label="required">*</span>
		</label>
		<input
			type="date"
			id="date"
			name="date"
			value={form?.formData?.date || ''}
			required
			aria-required="true"
			min={new Date().toISOString().split('T')[0]}
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
		/>
	</div>

	<div>
		<label for="time" class="mb-2 block text-sm font-medium text-gray-700">
			Preferred Time <span class="text-red-600" aria-label="required">*</span>
		</label>
		<input
			type="time"
			id="time"
			name="time"
			value={form?.formData?.time || ''}
			required
			aria-required="true"
			min="09:30"
			max="17:00"
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
		/>
	</div>

	<div>
		<label for="notes" class="mb-2 block text-sm font-medium text-gray-700">
			Additional Notes
		</label>
		<textarea
			id="notes"
			name="notes"
			rows="4"
			placeholder="Any special requests or questions?"
			class="w-full rounded-xl border border-gray-200 px-4 py-3 shadow-[inset_0_1px_3px_rgba(0,0,0,0.06)] transition-all duration-200 focus:border-transparent focus:shadow-[inset_0_1px_3px_rgba(0,0,0,0.06),0_0_0_3px_rgba(251,191,36,0.15)] focus:ring-2 focus:ring-[var(--color-gold)]/50"
			>{form?.formData?.notes || ''}</textarea
		>
	</div>

	<button
		type="submit"
		class="w-full rounded-full bg-[var(--color-gold)] px-6 py-3 font-semibold text-[var(--color-navy)] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)] hover:shadow-lg active:scale-[0.98]"
	>
		Request Booking
	</button>
</form>
