<script lang="ts">
	import { onMount } from 'svelte';
	import { businessInfo } from '$lib/data/business';

	let mapElement: HTMLDivElement;
	let map: any;

	onMount(() => {
		// Dynamic import for client-side only
		(async () => {
			const L = await import('leaflet');

			// Initialize map
			map = L.map(mapElement).setView([businessInfo.location.lat, businessInfo.location.lng], 15);

			// Add OpenStreetMap tiles
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				maxZoom: 19
			}).addTo(map);

			// Add marker for salon
			L.marker([businessInfo.location.lat, businessInfo.location.lng])
				.addTo(map)
				.bindPopup(
					`<strong>${businessInfo.name}</strong><br>${businessInfo.address.street}<br>${businessInfo.address.city}, ${businessInfo.address.postcode}`
				)
				.openPopup();
		})();

		return () => {
			if (map) {
				map.remove();
			}
		};
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		crossorigin=""
	/>
</svelte:head>

<div
	bind:this={mapElement}
	class="h-96 w-full rounded-lg shadow-lg"
	aria-label="Map showing Studio210 location"
></div>
