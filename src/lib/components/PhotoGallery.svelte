<script lang="ts">
	import type { GalleryPhoto } from '$lib/data/gallery';

	interface Props {
		photos: GalleryPhoto[];
	}

	let { photos }: Props = $props();

	let selectedPhoto = $state<GalleryPhoto | null>(null);

	function openLightbox(photo: GalleryPhoto) {
		selectedPhoto = photo;
	}

	function closeLightbox() {
		selectedPhoto = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && selectedPhoto) {
			closeLightbox();
		}
	}

	// Assign varied row spans for masonry effect
	const rowSpans = [2, 3, 2, 3, 2, 2, 3, 2, 3, 2, 2, 3];
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4" style="grid-auto-rows: 120px;">
	{#each photos as photo, index}
		<button
			onclick={() => openLightbox(photo)}
			class="group relative overflow-hidden rounded-xl bg-gray-200 transition-all duration-300 hover:ring-2 hover:ring-[var(--color-gold)]/40 hover:ring-offset-1"
			style="grid-row: span {rowSpans[index % rowSpans.length]};"
			type="button"
		>
			<img
				src={photo.src}
				alt={photo.alt}
				class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				loading="lazy"
			/>
			<div
				class="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40"
			>
				<svg
					class="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
					/>
				</svg>
			</div>
		</button>
	{/each}
</div>

<!-- Lightbox -->
{#if selectedPhoto}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
		onclick={closeLightbox}
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		tabindex="-1"
	>
		<button
			onclick={closeLightbox}
			class="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
			aria-label="Close lightbox"
		>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<img
			src={selectedPhoto.src}
			alt={selectedPhoto.alt}
			class="max-h-full max-w-full rounded-xl object-contain"
			onclick={(e) => e.stopPropagation()}
		/>
	</div>
{/if}
