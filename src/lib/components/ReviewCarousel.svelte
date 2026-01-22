<script lang="ts">
	import type { Review } from '$lib/types/review';

	interface Props {
		reviews: Review[];
	}

	let { reviews }: Props = $props();

	let currentIndex = $state(0);
	let isAutoPlaying = $state(true);
	let intervalId: number | undefined = $state(undefined);

	function nextReview() {
		currentIndex = (currentIndex + 1) % reviews.length;
	}

	function prevReview() {
		currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
	}

	function goToReview(index: number) {
		currentIndex = index;
		isAutoPlaying = false;
		if (intervalId) clearInterval(intervalId);
	}

	$effect(() => {
		if (isAutoPlaying) {
			intervalId = setInterval(nextReview, 5000) as unknown as number;
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});
</script>

<div class="relative overflow-hidden rounded-lg bg-white shadow-lg">
	<!-- Reviews Container -->
	<div
		class="transition-transform duration-500 ease-in-out"
		style="transform: translateX(-{currentIndex * 100}%); display: flex;"
	>
		{#each reviews as review}
			<div class="min-w-full p-8 md:p-12" style="flex: 0 0 100%;">
				<article class="mx-auto max-w-3xl text-center">
					<!-- Star Rating -->
					<div class="mb-6 flex justify-center gap-1" aria-label="5 star rating">
						<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
						{#each { length: review.rating } as star}
							<svg
								class="h-6 w-6 text-[var(--color-gold)]"
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
					<blockquote class="mb-6 text-xl text-gray-700 md:text-2xl">
						"{review.reviewText}"
					</blockquote>

					<!-- Reviewer Name -->
					<footer>
						<p class="text-lg font-semibold text-[var(--color-navy)]">
							{review.reviewerName}
						</p>
					</footer>
				</article>
			</div>
		{/each}
	</div>

	<!-- Navigation Arrows -->
	<button
		onclick={prevReview}
		class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white md:left-4"
		aria-label="Previous review"
	>
		<svg
			class="h-6 w-6 text-[var(--color-navy)]"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		onclick={nextReview}
		class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white md:right-4"
		aria-label="Next review"
	>
		<svg
			class="h-6 w-6 text-[var(--color-navy)]"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<!-- Dots Navigation -->
	<div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
		<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
		{#each reviews as _review, index}
			<button
				onclick={() => goToReview(index)}
				class="h-2 w-2 rounded-full transition-all {currentIndex === index
					? 'w-8 bg-[var(--color-gold)]'
					: 'bg-gray-400 hover:bg-gray-600'}"
				aria-label="Go to review {index + 1}"
			></button>
		{/each}
	</div>
</div>
