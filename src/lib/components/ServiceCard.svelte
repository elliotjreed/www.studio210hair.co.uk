<script lang="ts">
	import type { Service } from '$lib/types/service';

	interface Props {
		service: Service;
	}

	let { service }: Props = $props();
</script>

<div
	class="flex h-full flex-col rounded-xl border-t-2 border-[var(--color-gold)] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
>
	<div class="mb-3 flex items-start justify-between gap-2">
		<h3 class="text-lg font-semibold text-[var(--color-navy)]">
			{service.name}
		</h3>
		<span
			class="shrink-0 rounded-full bg-[var(--color-gold)]/10 px-3 py-1 text-base font-bold text-[var(--color-gold-dark)]"
		>
			{typeof service.price === 'number' ? `£${service.price}` : service.price}
		</span>
	</div>

	{#if service.duration}
		<p class="mb-2 text-sm text-gray-500">{service.duration} minutes</p>
	{/if}

	{#if service.description}
		<p class="mb-4 flex-grow text-gray-700">{service.description}</p>
	{/if}

	{#if service.note}
		<p class="mb-4 text-sm text-gray-500 italic">{service.note}</p>
	{/if}

	<a
		href={`/booking?service=${encodeURIComponent(service.name)}`}
		class="mt-auto inline-block rounded-full bg-[var(--color-gold)] px-4 py-2 text-center font-semibold text-[var(--color-navy)] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)] hover:shadow-lg active:scale-[0.98]"
	>
		Book Now
	</a>
</div>
