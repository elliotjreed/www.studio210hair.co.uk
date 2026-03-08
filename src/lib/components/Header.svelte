<script lang="ts">
	import { onMount } from 'svelte';
	import { businessInfo } from '$lib/data/business';
	import Navigation from './Navigation.svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 z-50 w-full text-white transition-all duration-300 {scrolled || mobileMenuOpen
		? 'border-b-2 border-[var(--color-gold)]/40 bg-[var(--color-navy)]/95 shadow-md backdrop-blur-md'
		: 'border-b border-transparent bg-transparent'}"
>
	<div class="container mx-auto px-4">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo -->
			<a
				href="/"
				class="flex items-center gap-3 font-serif text-2xl font-bold tracking-wide text-[var(--color-gold)] transition-opacity hover:opacity-90 md:text-3xl"
			>
				<img src="/favicon.svg" alt="Studio210 Logo" class="h-10 w-10 md:h-12 md:w-12" />
				<span>Studio210</span>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden lg:block" aria-label="Main navigation">
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
				class="rounded p-2 transition-colors hover:bg-white/10 lg:hidden"
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
	</div>
</header>

<!-- Full-screen mobile overlay -->
<div
	class="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-navy)]/95 pt-20 backdrop-blur-md transition-all duration-300 lg:hidden {mobileMenuOpen
		? 'pointer-events-auto opacity-100'
		: 'pointer-events-none opacity-0'}"
	aria-hidden={!mobileMenuOpen}
>
	<!-- Decorative gold line -->
	<div class="mb-10 h-px w-16 bg-[var(--color-gold)]/50"></div>

	<nav aria-label="Mobile navigation">
		<Navigation mobile={true} onLinkClick={() => (mobileMenuOpen = false)} />
	</nav>

	<div class="mt-10 h-px w-16 bg-[var(--color-gold)]/50"></div>
</div>
