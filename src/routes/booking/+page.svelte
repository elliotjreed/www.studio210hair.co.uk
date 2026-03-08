<script lang="ts">
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import BookingForm from '$lib/components/BookingForm.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';
	import { fadeIn } from '$lib/actions/fadeIn';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-24 md:py-32"
	style="background-image: url('/photos/diary.jpg');"
>
	<!-- Gradient overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to top, rgba(17,39,99,0.8) 0%, rgba(17,39,99,0.5) 50%, rgba(17,39,99,0.3) 100%);"
	></div>

	<div class="relative z-10 container mx-auto px-4 text-center" use:fadeIn>
		<!-- Decorative gold line -->
		<div
			class="mx-auto mb-6 h-px w-16"
			style="background: linear-gradient(90deg, transparent, var(--color-gold), transparent);"
		></div>
		<h1 class="mb-6 font-serif text-4xl font-bold tracking-tight text-white md:text-5xl">
			Book Your Appointment
		</h1>
		<p class="mx-auto max-w-3xl text-xl text-white/90">
			Choose your service and preferred time. We'll confirm your booking shortly.
		</p>
	</div>
</section>

<!-- Booking Content -->
<section class="bg-[var(--color-cream)] py-20 md:py-24">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
			<!-- Booking Form -->
			<div class="lg:col-span-2" use:fadeIn>
				<h2
					class="heading-accent heading-accent-left mb-8 font-serif text-3xl font-bold text-[var(--color-navy)]"
				>
					Appointment Details
				</h2>
				<BookingForm {form} services={data.services} />
			</div>

			<!-- Booking Information -->
			<div class="space-y-6" use:fadeIn={{ delay: 100 }}>
				<div class="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
					<h3 class="mb-4 font-serif text-2xl font-bold text-[var(--color-navy)]">Opening Hours</h3>
					<OpeningHours />
				</div>

				<div class="rounded-xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
					<h3 class="mb-4 font-serif text-2xl font-bold text-[var(--color-navy)]">
						What to Expect
					</h3>
					<ul class="space-y-3 text-gray-700" role="list">
						<li class="flex items-start gap-2">
							<svg
								class="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-gold)]"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>We'll confirm your appointment within 24 hours</span>
						</li>
						<li class="flex items-start gap-2">
							<svg
								class="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-gold)]"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Please arrive 5 minutes early</span>
						</li>
						<li class="flex items-start gap-2">
							<svg
								class="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-gold)]"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Call us if you need to reschedule</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl bg-[var(--color-navy)] p-6 text-white">
					<h3 class="mb-2 font-serif text-xl font-bold">Need Help?</h3>
					<p class="mb-4">Prefer to book by phone?</p>
					<a
						href="tel:07395292575"
						class="inline-block w-full rounded-full bg-[var(--color-gold)] px-6 py-3 text-center font-semibold text-[var(--color-navy)] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] hover:shadow-lg active:scale-[0.98]"
					>
						Call Us
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
