<script lang="ts">
	import type { PageData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import PhotoCarousel from '$lib/components/PhotoCarousel.svelte';
	import { fadeIn } from '$lib/actions/fadeIn';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-24 md:py-32"
	style="background-image: url('/photos/hair-styling.jpg'); background-image: image-set(url('/photos/hair-styling.webp') type('image/webp'), url('/photos/hair-styling.jpg') type('image/jpeg'));"
>
	<!-- Gradient overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.25) 100%);"
	></div>

	<div class="relative z-10 container mx-auto px-4 text-center" use:fadeIn>
		<!-- Decorative gold line -->
		<div
			class="mx-auto mb-6 h-px w-16"
			style="background: linear-gradient(90deg, transparent, var(--color-gold), transparent);"
		></div>
		<h1 class="mb-6 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
			Customer Reviews
		</h1>
		<p class="mx-auto max-w-3xl text-xl text-white/90">
			Read what our clients say about their experience at Studio210
		</p>
	</div>
</section>

<!-- Rating Summary -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center" use:fadeIn>
			<div class="mb-4 flex items-center justify-center gap-2">
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each { length: 5 } as star}
					<svg
						class="h-8 w-8 text-[var(--color-gold)]"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
						style="filter: drop-shadow(0 1px 4px rgba(251, 191, 36, 0.5));"
					>
						<path
							d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
						/>
					</svg>
				{/each}
			</div>
			<p class="mb-2 text-3xl font-bold text-[var(--color-navy)]">5.0 out of 5</p>
			<p class="text-lg text-gray-700">Based on {data.reviews.length} reviews</p>
		</div>
	</div>
</section>

<!-- Reviews Grid -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-6xl">
			<div use:fadeIn>
				<h2
					class="heading-accent mb-12 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
				>
					What Our Clients Say
				</h2>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.reviews as review, index}
					<article
						class="relative flex flex-col rounded-xl border-t-2 border-[var(--color-gold)] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
						itemscope
						itemtype="https://schema.org/Review"
						use:fadeIn={{ delay: index * 80 }}
					>
						<!-- Decorative quote -->
						<span
							class="absolute top-3 right-4 font-serif text-5xl leading-none text-[var(--color-gold)]/15 select-none"
							aria-hidden="true">&ldquo;</span
						>

						<!-- Star Rating -->
						<div class="mb-4 flex gap-1" role="img" aria-label="{review.rating} star rating">
							<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
							{#each { length: review.rating } as star}
								<svg
									class="h-5 w-5 text-[var(--color-gold)]"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
									style="filter: drop-shadow(0 1px 2px rgba(251, 191, 36, 0.3));"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>

						<!-- Review Text -->
						<blockquote class="mb-4 flex-grow text-gray-700" itemprop="reviewBody">
							&ldquo;{review.reviewText}&rdquo;
						</blockquote>

						<!-- Reviewer Name -->
						<footer class="mt-auto">
							<p
								class="font-semibold text-[var(--color-navy)]"
								itemprop="author"
								itemscope
								itemtype="https://schema.org/Person"
							>
								<span itemprop="name">{review.reviewerName}</span>
							</p>
						</footer>

						<!-- Hidden structured data -->
						<meta itemprop="ratingValue" content={String(review.rating)} />
						<meta itemprop="bestRating" content="5" />
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Client Work Carousel -->
<section class="bg-white py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-10 text-center font-serif text-3xl font-bold text-[var(--color-navy)] md:text-4xl"
			>
				See the Results
			</h2>
		</div>
		<div class="mx-auto max-w-5xl" use:fadeIn={{ delay: 100 }}>
			<PhotoCarousel photos={data.galleryPhotos} />
		</div>
	</div>
</section>

<!-- Call to Action -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-20 text-white md:py-24"
>
	<div class="container mx-auto px-4 text-center" use:fadeIn>
		<h2 class="mb-6 font-serif text-3xl font-bold md:text-4xl">
			Experience the Studio210 Difference
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Join our satisfied clients and book your appointment today for professional hair care in a
			friendly atmosphere.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/booking"
				class="inline-block rounded-full bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-xl active:scale-[0.98]"
			>
				Book Appointment
			</a>
			<a
				href="/services"
				class="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-[var(--color-navy)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-xl active:scale-[0.98]"
			>
				View Services
			</a>
		</div>
	</div>
</section>
