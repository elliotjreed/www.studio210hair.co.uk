<script lang="ts">
	import type { Service } from '$lib/types/service';

	interface Props {
		service: Service;
	}

	let { service }: Props = $props();
</script>

<div
	class="flex h-full flex-col rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
>
	<div class="mb-2 flex items-start justify-between">
		<h3 class="text-lg font-semibold text-[var(--color-navy)]">
			{service.name}
		</h3>
		<span class="text-xl font-bold text-[var(--color-gold)]">
			{typeof service.price === 'number' ? `£${service.price}` : service.price}
		</span>
	</div>

	{#if service.duration}
		<p class="mb-2 text-sm text-gray-600">{service.duration} minutes</p>
	{/if}

	{#if service.description}
		<p class="mb-4 flex-grow text-gray-700">{service.description}</p>
	{/if}

	{#if service.note}
		<p class="mb-4 text-sm text-gray-500 italic">{service.note}</p>
	{/if}

	<a
		href={`/booking?service=${encodeURIComponent(service.name)}`}
		class="mt-auto inline-block rounded bg-[var(--color-gold)] px-4 py-2 text-center font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-dark)]"
	>
		Book Now
	</a>
</div>
