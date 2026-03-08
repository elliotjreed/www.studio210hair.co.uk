<script lang="ts">
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';
	import Map from '$lib/components/Map.svelte';
	import { fadeIn } from '$lib/actions/fadeIn';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-24 text-white md:py-32"
>
	<div class="container mx-auto px-4 text-center" use:fadeIn>
		<!-- Decorative gold line -->
		<div
			class="mx-auto mb-6 h-px w-16"
			style="background: linear-gradient(90deg, transparent, var(--color-gold), transparent);"
		></div>
		<h1 class="mb-6 font-serif text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
		<p class="mx-auto max-w-3xl text-xl text-white/90">
			Have a question or ready to book? We'd love to hear from you.
		</p>
	</div>
</section>

<!-- Contact Content -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
			<!-- Contact Form -->
			<div use:fadeIn>
				<h2
					class="heading-accent heading-accent-left mb-8 font-serif text-3xl font-bold text-[var(--color-navy)]"
				>
					Send Us a Message
				</h2>
				<ContactForm {form} />
			</div>

			<!-- Contact Information -->
			<div class="space-y-8" use:fadeIn={{ delay: 100 }}>
				<div>
					<h2
						class="heading-accent heading-accent-left mb-8 font-serif text-3xl font-bold text-[var(--color-navy)]"
					>
						Get in Touch
					</h2>
					<ContactInfo />
				</div>

				<div>
					<h3 class="mb-4 font-serif text-2xl font-bold text-[var(--color-navy)]">Opening Hours</h3>
					<OpeningHours />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="bg-white py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div use:fadeIn>
			<h2
				class="heading-accent mb-10 text-center font-serif text-3xl font-bold text-[var(--color-navy)]"
			>
				Find Us
			</h2>
		</div>
		<div use:fadeIn={{ delay: 100 }}>
			<Map />
		</div>
	</div>
</section>
