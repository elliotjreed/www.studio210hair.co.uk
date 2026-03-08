<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		mobile?: boolean;
		onLinkClick?: () => void;
	}

	let { mobile = false, onLinkClick }: Props = $props();

	const links = [
		{ href: '/', label: 'Home', isCta: false },
		{ href: '/services', label: 'Services', isCta: false },
		{ href: '/reviews', label: 'Reviews', isCta: false },
		{ href: '/referral', label: 'Referral', isCta: false },
		{ href: '/contact', label: 'Contact', isCta: false },
		{ href: '/booking', label: 'Book Now', isCta: true }
	];
</script>

<ul
	class={mobile
		? 'flex flex-col items-center space-y-8 text-center'
		: 'flex items-center space-x-8'}
	role="list"
>
	{#each links as link}
		<li>
			{#if link.isCta}
				<a
					href={link.href}
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					onclick={onLinkClick}
					class="rounded-full bg-[var(--color-gold)] px-6 py-3 font-semibold tracking-wider whitespace-nowrap text-[var(--color-navy)] uppercase shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-lg active:scale-[0.98] {mobile
						? 'mt-2 text-base'
						: 'px-5 py-2 text-sm'}"
				>
					{link.label}
				</a>
			{:else}
				<a
					href={link.href}
					aria-current={$page.url.pathname === link.href ? 'page' : undefined}
					onclick={onLinkClick}
					class="nav-link font-medium tracking-wider uppercase transition-colors hover:text-[var(--color-gold)] {mobile
						? 'text-xl'
						: 'text-sm'} {$page.url.pathname === link.href
						? 'font-semibold text-[var(--color-gold)]'
						: mobile
							? 'text-white'
							: ''}"
				>
					{link.label}
				</a>
			{/if}
		</li>
	{/each}
</ul>
