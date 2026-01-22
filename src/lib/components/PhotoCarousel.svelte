<script lang="ts">
	import type { GalleryPhoto } from '$lib/data/gallery';

	interface Props {
		photos: GalleryPhoto[];
	}

	let { photos }: Props = $props();

	let currentIndex = $state(0);
	let isAutoPlaying = $state(true);
	let intervalId: number | undefined = $state(undefined);

	function nextPhoto() {
		currentIndex = (currentIndex + 1) % photos.length;
	}

	function prevPhoto() {
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
	}

	function goToPhoto(index: number) {
		currentIndex = index;
		isAutoPlaying = false;
		if (intervalId) clearInterval(intervalId);
	}

	$effect(() => {
		if (isAutoPlaying) {
			intervalId = setInterval(nextPhoto, 4000) as unknown as number;
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});
</script>

<div class="relative overflow-hidden rounded-lg bg-gray-200 shadow-lg">
	<!-- Photos Container -->
	<div class="relative aspect-[4/3] w-full md:aspect-[16/9]">
		<div
			class="flex h-full transition-transform duration-500 ease-in-out"
			style="transform: translateX(-{currentIndex * 100}%);"
		>
			{#each photos as photo}
				<div class="min-w-full" style="flex: 0 0 100%;">
					<img src={photo.src} alt={photo.alt} class="h-full w-full object-cover" loading="lazy" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Navigation Arrows -->
	<button
		onclick={prevPhoto}
		class="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white md:left-4"
		aria-label="Previous photo"
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
		onclick={nextPhoto}
		class="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition-colors hover:bg-white md:right-4"
		aria-label="Next photo"
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
		{#each photos as _photo, index}
			<button
				onclick={() => goToPhoto(index)}
				class="h-2 w-2 rounded-full transition-all {currentIndex === index
					? 'w-8 bg-[var(--color-gold)]'
					: 'bg-white/60 hover:bg-white'}"
				aria-label="Go to photo {index + 1}"
			></button>
		{/each}
	</div>

	<!-- Photo Counter -->
	<div class="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
		{currentIndex + 1} / {photos.length}
	</div>
</div>
