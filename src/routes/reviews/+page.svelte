<script lang="ts">
	import type { PageData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import PhotoCarousel from '$lib/components/PhotoCarousel.svelte';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-16"
	style="background-image: url('/photos/hair-styling.jpg');"
>
	<!-- Dark overlay for text readability -->
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 container mx-auto px-4 text-center">
		<h1 class="mb-6 text-4xl font-bold text-white md:text-5xl">Customer Reviews</h1>
		<p class="mx-auto max-w-3xl text-xl text-white">
			Read what our clients say about their experience at Studio210
		</p>
	</div>
</section>

<!-- Rating Summary -->
<section class="bg-white py-12">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<div class="mb-4 flex items-center justify-center gap-2">
				<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
				{#each { length: 5 } as star}
					<svg
						class="h-8 w-8 text-[var(--color-gold)]"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
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
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
				What Our Clients Say
			</h2>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each data.reviews as review}
					<article
						class="flex flex-col rounded-lg bg-white p-6 shadow-md"
						itemscope
						itemtype="https://schema.org/Review"
					>
						<!-- Star Rating -->
						<div class="mb-4 flex gap-1" aria-label="5 star rating">
							<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
							{#each { length: review.rating } as star}
								<svg
									class="h-5 w-5 text-[var(--color-gold)]"
									fill="currentColor"
									viewBox="0 0 20 20"
									aria-hidden="true"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							{/each}
						</div>

						<!-- Review Text -->
						<blockquote class="mb-4 flex-grow text-gray-700" itemprop="reviewBody">
							"{review.reviewText}"
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
<section class="bg-[var(--color-neutral-50)] py-12">
	<div class="container mx-auto px-4">
		<h2 class="mb-8 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
			See the Results
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
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Experience the Studio210 Difference</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Join our satisfied clients and book your appointment today for professional hair care in a
			friendly atmosphere.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/booking"
				class="inline-block rounded-lg bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-light)]"
			>
				Book Appointment
			</a>
			<a
				href="/services"
				class="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-gray-100"
			>
				View Services
			</a>
		</div>
	</div>
</section>
