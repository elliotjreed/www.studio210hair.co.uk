<script lang="ts">
	import type { PageData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import ReviewCarousel from '$lib/components/ReviewCarousel.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import Map from '$lib/components/Map.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<Hero />

<!-- About Section -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
				Your Local Hair Experts
			</h2>
			<p class="mb-4 text-lg text-gray-700">
				Welcome to Studio210, where professional hair care meets friendly service. Located in the
				heart of Bestwood Park, our experienced stylists are dedicated to helping you look and feel
				your best.
			</p>
			<p class="text-lg text-gray-700">
				From precision cuts and vibrant colors to luxurious treatments, we offer a full range of
				services tailored to your individual style and needs.
			</p>
		</div>
	</div>
</section>

<!-- Featured Services Section -->
<section class="bg-[var(--color-neutral-50)] py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
			Popular Services
		</h2>
		<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each data.featuredServices as service}
				<ServiceCard {service} />
			{/each}
		</div>
		<div class="text-center">
			<a
				href="/services"
				class="inline-block rounded-lg bg-[var(--color-navy)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-navy-light)]"
			>
				View All Services
			</a>
		</div>
	</div>
</section>

<!-- Customer Reviews Section -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
			What Our Clients Say
		</h2>
		<div class="mx-auto max-w-5xl">
			<ReviewCarousel reviews={data.reviews} />
		</div>
		<div class="mt-8 text-center">
			<a
				href="/reviews"
				class="inline-block rounded-lg bg-[var(--color-navy)] px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-navy-light)]"
			>
				Read All Reviews
			</a>
		</div>
	</div>
</section>

<!-- Client Gallery Section -->
<section class="bg-[var(--color-neutral-50)] py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-4 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
			Our Recent Work
		</h2>
		<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-700">
			See the amazing transformations we've created for our clients
		</p>
		<PhotoGallery photos={data.galleryPhotos} />
	</div>
</section>

<!-- Location Section -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
			Visit Us
		</h2>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<div>
				<Map />
			</div>
			<div class="flex flex-col justify-center">
				<h3 class="mb-6 text-2xl font-bold text-[var(--color-navy)]">Location & Hours</h3>
				<div class="mb-8">
					<h4 class="mb-3 text-lg font-semibold text-[var(--color-navy)]">Address</h4>
					<ContactInfo />
				</div>
				<div>
					<h4 class="mb-3 text-lg font-semibold text-[var(--color-navy)]">Opening Hours</h4>
					<OpeningHours />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action Section -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-16 text-white"
>
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Ready for a New Look?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Book your appointment today and let our expert stylists bring your vision to life.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/booking"
				class="inline-block rounded-lg bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-light)]"
			>
				Book Appointment
			</a>
			<a
				href="/contact"
				class="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-gray-100"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>
