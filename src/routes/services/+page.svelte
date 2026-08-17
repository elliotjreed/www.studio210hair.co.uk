<script lang="ts">
	import type { PageData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import PhotoCarousel from '$lib/components/PhotoCarousel.svelte';
	import { fadeIn } from '$lib/actions/fadeIn';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-24 md:py-32"
	style="background-image: url('/photos/equipment.jpg');"
>
	<!-- Gradient overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, rgba(17,39,99,0.8) 0%, rgba(17,39,99,0.5) 50%, rgba(17,39,99,0.3) 100%);"
	></div>

	<div class="relative z-10 container mx-auto px-4 text-center" use:fadeIn>
		<!-- Decorative gold line -->
		<div
			class="mx-auto mb-6 h-px w-16"
			style="background: linear-gradient(90deg, transparent, var(--color-gold), transparent);"
		></div>
		<h1 class="mb-6 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
			Our Services
		</h1>
		<p class="mx-auto max-w-3xl text-xl text-white/90">
			From classic cuts to creative colour, we offer a comprehensive range of professional hair
			services tailored to your unique style.
		</p>
	</div>
</section>

<!-- Services by Category -->
{#each data.services as category, index}
	<section class={`py-20 md:py-24 ${index % 2 === 0 ? 'bg-[var(--color-cream)]' : 'bg-white'}`}>
		<div class="container mx-auto px-4">
			<div use:fadeIn>
				<h2
					class="heading-accent heading-accent-left mb-10 font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
				>
					{category.category}
				</h2>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each category.items as service, serviceIndex}
					<div use:fadeIn={{ delay: serviceIndex * 80 }}>
						<ServiceCard {service} />
					</div>
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- Client Work Carousel -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-10 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				See Our Work
			</h2>
		</div>
		<div class="mx-auto max-w-5xl" use:fadeIn={{ delay: 100 }}>
			<PhotoCarousel photos={data.galleryPhotos} />
		</div>
	</div>
</section>

<!-- Trusted Partners -->
<section class="bg-white py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-10 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				Trusted Partners
			</h2>
		</div>
		<div class="mx-auto max-w-2xl" use:fadeIn={{ delay: 100 }}>
			<div
				class="rounded-xl border-t-2 border-[var(--color-gold)] bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
			>
				<h3 class="mb-2 text-xl font-semibold text-[var(--color-navy)]">Moremi Aesthetics</h3>
				<p class="mb-4 text-gray-700">
					Aesthetic treatments and beauty services including dermal fillers, anti-wrinkle
					treatments, teeth whitening, fat dissolving, vampire facials and mesotherapy - "Where
					Beauty Meets Confidence".
				</p>
				<div class="mb-6 space-y-1 text-gray-700">
					<p>
						<a
							href="tel:07951822809"
							class="transition-colors hover:text-[var(--color-gold)]"
							aria-label="Call Moremi Aesthetics"
						>
							07951 822809
						</a>
					</p>
					<p>
						<a
							href="mailto:info@moremiaesthetics.com"
							class="transition-colors hover:text-[var(--color-gold)]"
							aria-label="Email Moremi Aesthetics"
						>
							info@moremiaesthetics.com
						</a>
					</p>
				</div>
				<a
					href="https://moremiaesthetics.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block rounded-full bg-[var(--color-gold)] px-6 py-2.5 text-center font-semibold text-[var(--color-navy)] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)] hover:shadow-lg active:scale-[0.98]"
				>
					Visit Website
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-20 text-white md:py-24"
>
	<div class="container mx-auto px-4 text-center" use:fadeIn>
		<h2 class="mb-6 font-serif text-3xl font-bold md:text-4xl">Ready to Book?</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Choose your perfect service and book your appointment online today.
		</p>
		<a
			href="/booking"
			class="inline-block rounded-full bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-xl active:scale-[0.98]"
		>
			Book Appointment
		</a>
	</div>
</section>
