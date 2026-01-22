<script lang="ts">
	import type { PageData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import PhotoCarousel from '$lib/components/PhotoCarousel.svelte';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-16"
	style="background-image: url('/photos/equipment.jpg');"
>
	<!-- Light overlay for text readability on white background -->
	<div class="absolute inset-0 bg-white/60"></div>

	<div class="relative z-10 container mx-auto px-4 text-center">
		<h1 class="mb-6 text-4xl font-bold text-[var(--color-navy)] md:text-5xl">Our Services</h1>
		<p class="mx-auto max-w-3xl text-xl text-[var(--color-navy)]">
			From classic cuts to creative color, we offer a comprehensive range of professional hair
			services tailored to your unique style.
		</p>
	</div>
</section>

<!-- Services by Category -->
{#each data.services as category, index}
	<section class={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[var(--color-neutral-50)]'}`}>
		<div class="container mx-auto px-4">
			<h2 class="mb-8 text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
				{category.category}
			</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each category.items as service}
					<ServiceCard {service} />
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- Client Work Carousel -->
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<h2 class="mb-8 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
			See Our Work
		</h2>
		<div class="mx-auto max-w-5xl">
			<PhotoCarousel photos={data.galleryPhotos} />
		</div>
	</div>
</section>

<!-- Call to Action -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-16 text-white"
>
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready to Book?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Choose your perfect service and book your appointment online today.
		</p>
		<a
			href="/booking"
			class="inline-block rounded-lg bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-light)]"
		>
			Book Appointment
		</a>
	</div>
</section>
