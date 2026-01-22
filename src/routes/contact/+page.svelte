<script lang="ts">
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';
	import Map from '$lib/components/Map.svelte';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-16 text-white"
>
	<div class="container mx-auto px-4 text-center">
		<h1 class="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
		<p class="mx-auto max-w-3xl text-xl">
			Have a question or ready to book? We'd love to hear from you.
		</p>
	</div>
</section>

<!-- Contact Content -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Form -->
			<div>
				<h2 class="mb-6 text-3xl font-bold text-[var(--color-navy)]">Send Us a Message</h2>
				<ContactForm {form} />
			</div>

			<!-- Contact Information -->
			<div class="space-y-8">
				<div>
					<h2 class="mb-6 text-3xl font-bold text-[var(--color-navy)]">Get in Touch</h2>
					<ContactInfo />
				</div>

				<div>
					<h3 class="mb-4 text-2xl font-bold text-[var(--color-navy)]">Opening Hours</h3>
					<OpeningHours />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="bg-[var(--color-neutral-50)] py-16">
	<div class="container mx-auto px-4">
		<h2 class="mb-8 text-center text-3xl font-bold text-[var(--color-navy)]">Find Us</h2>
		<Map />
	</div>
</section>
