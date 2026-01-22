<script lang="ts">
	import { businessInfo } from '$lib/data/business';
	import Navigation from './Navigation.svelte';

	let mobileMenuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 bg-[var(--color-navy)] text-white shadow-md">
	<div class="container mx-auto px-4">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class="text-2xl font-bold text-[var(--color-gold)] transition-opacity hover:opacity-90 md:text-3xl"
			>
				Studio210
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden md:block" aria-label="Main navigation">
				<Navigation />
			</nav>

			<!-- Phone number -->
			<a
				href={`tel:${businessInfo.contact.phone.replace(/\s/g, '')}`}
				class="hidden items-center gap-2 transition-colors hover:text-[var(--color-gold)] lg:flex"
				aria-label="Call us at {businessInfo.contact.phone}"
			>
				<svg
					class="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				{businessInfo.contact.phone}
			</a>

			<!-- Mobile menu button -->
			<button
				class="rounded p-2 transition-colors hover:bg-[var(--color-navy-dark)] md:hidden"
				aria-label="Toggle navigation menu"
				aria-expanded={mobileMenuOpen}
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
			>
				{#if mobileMenuOpen}
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="pb-4 md:hidden">
				<nav aria-label="Mobile navigation">
					<Navigation mobile={true} />
				</nav>
			</div>
		{/if}
	</div>
</header>
