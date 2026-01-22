<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		mobile?: boolean;
	}

	let { mobile = false }: Props = $props();

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/reviews', label: 'Reviews' },
		{ href: '/referral', label: 'Referral' },
		{ href: '/contact', label: 'Contact' },
		{ href: '/booking', label: 'Book Now' }
	];
</script>

<ul class={mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'} role="list">
	{#each links as link}
		<li>
			<a
				href={link.href}
				aria-current={$page.url.pathname === link.href ? 'page' : undefined}
				class="transition-colors hover:text-[var(--color-gold)] {$page.url.pathname === link.href
					? 'font-semibold text-[var(--color-gold)]'
					: ''}"
			>
				{link.label}
			</a>
		</li>
	{/each}
</ul>
