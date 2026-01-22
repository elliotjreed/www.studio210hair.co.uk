<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		title: string;
		description: string;
		type?: 'website' | 'article';
		image?: string;
		jsonLd?: object;
	}

	let { title, description, type = 'website', image, jsonLd }: Props = $props();

	const fullTitle = $derived(`${title} | Studio210 Hair Salon Nottingham`);
	const url = $derived($page.url.href);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />

	<!-- OpenGraph tags -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
	<meta property="og:site_name" content="Studio210" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta name="twitter:image" content={image} />
	{/if}

	<!-- JSON-LD structured data -->
	{#if jsonLd}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html '<' + 'script type="application/ld+json">' + JSON.stringify(jsonLd) + '<' + '/script>'}
	{/if}
</svelte:head>
