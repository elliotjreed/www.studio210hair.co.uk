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
	import { fadeIn } from '$lib/actions/fadeIn';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<Hero />

<!-- Decorative divider -->
<div class="section-divider py-2"></div>

<!-- About Section -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center" use:fadeIn>
			<h2
				class="heading-accent mb-8 font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				Your Local Hair Experts
			</h2>
			<p class="mb-4 text-lg text-gray-700">
				Welcome to Studio210, where professional hair care meets friendly service. Located in the
				heart of Bestwood Park, our experienced stylists are dedicated to helping you look and feel
				your best.
			</p>
			<p class="text-lg text-gray-700">
				From precision cuts and vibrant colours to luxurious treatments, we offer a full range of
				services tailored to your individual style and needs.
			</p>
		</div>
	</div>
</section>

<!-- Decorative divider -->
<div class="section-divider section-divider-white py-2"></div>

<!-- Featured Services Section -->
<section class="bg-white py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-12 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				Popular Services
			</h2>
		</div>
		<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each data.featuredServices as service, index}
				<div use:fadeIn={{ delay: index * 100 }}>
					<ServiceCard {service} />
				</div>
			{/each}
		</div>
		<div class="text-center" use:fadeIn>
			<a
				href="/services"
				class="inline-block rounded-full bg-[var(--color-navy)] px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-navy-light)] hover:shadow-lg active:scale-[0.98]"
			>
				View All Services
			</a>
		</div>
	</div>
</section>

<!-- Decorative divider -->
<div class="section-divider py-2"></div>

<!-- Customer Reviews Section -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-12 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				What Our Clients Say
			</h2>
		</div>
		<div class="mx-auto max-w-5xl" use:fadeIn={{ delay: 100 }}>
			<ReviewCarousel reviews={data.reviews} />
		</div>
		<div class="mt-8 text-center" use:fadeIn={{ delay: 200 }}>
			<a
				href="/reviews"
				class="inline-block rounded-full bg-[var(--color-navy)] px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-navy-light)] hover:shadow-lg active:scale-[0.98]"
			>
				Read All Reviews
			</a>
		</div>
	</div>
</section>

<!-- Decorative divider -->
<div class="section-divider section-divider-white py-2"></div>

<!-- Client Gallery Section -->
<section class="bg-white py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-4 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				Our Recent Work
			</h2>
			<p class="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-700">
				See the amazing transformations we've created for our clients
			</p>
		</div>
		<div use:fadeIn={{ delay: 100 }}>
			<PhotoGallery photos={data.galleryPhotos} />
		</div>
	</div>
</section>

<!-- Decorative divider -->
<div class="section-divider py-2"></div>

<!-- Location Section -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-12 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				Visit Us
			</h2>
		</div>
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<div use:fadeIn>
				<Map />
			</div>
			<div class="flex flex-col justify-center" use:fadeIn={{ delay: 100 }}>
				<h3 class="mb-6 font-serif text-2xl font-bold text-[var(--color-navy)]">
					Location & Hours
				</h3>
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
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-20 text-white md:py-24"
>
	<div class="container mx-auto px-4 text-center" use:fadeIn>
		<h2 class="mb-6 font-serif text-3xl font-bold md:text-4xl">Ready for a New Look?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Book your appointment today and let our expert stylists bring your vision to life.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/booking"
				class="inline-block rounded-full bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-xl active:scale-[0.98]"
			>
				Book Appointment
			</a>
			<a
				href="/contact"
				class="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-[var(--color-navy)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl active:scale-[0.98]"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>
