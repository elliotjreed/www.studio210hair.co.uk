<script lang="ts">
	import { onMount } from 'svelte';
	import { businessInfo } from '$lib/data/business';

	let mapElement: HTMLDivElement;
	let map: any;

	onMount(() => {
		let cancelled = false;

		const initialiseMap = async () => {
			const [L] = await Promise.all([import('leaflet'), import('leaflet/dist/leaflet.css')]);

			if (cancelled) {
				return;
			}

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
		};

		// Defer loading Leaflet's JS/CSS and initialising the map until it is about to scroll into view
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						observer.disconnect();
						initialiseMap();
					}
				}
			},
			{ rootMargin: '200px' }
		);

		observer.observe(mapElement);

		return () => {
			cancelled = true;
			observer.disconnect();
			if (map) {
				map.remove();
			}
		};
	});
</script>

<div
	bind:this={mapElement}
	class="h-96 w-full rounded-lg shadow-lg"
	aria-label="Map showing Studio210 location"
></div>
