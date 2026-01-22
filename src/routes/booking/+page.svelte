<script lang="ts">
	import type { PageData } from './$types';
	import type { ActionData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import BookingForm from '$lib/components/BookingForm.svelte';
	import OpeningHours from '$lib/components/OpeningHours.svelte';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-16"
	style="background-image: url('/photos/diary.jpg');"
>
	<!-- Light overlay for text readability on white background -->
	<div class="absolute inset-0 bg-white/60"></div>

	<div class="relative z-10 container mx-auto px-4 text-center">
		<h1 class="mb-6 text-4xl font-bold text-[var(--color-navy)] md:text-5xl">
			Book Your Appointment
		</h1>
		<p class="mx-auto max-w-3xl text-xl text-[var(--color-navy)]">
			Choose your service and preferred time. We'll confirm your booking shortly.
		</p>
	</div>
</section>

<!-- Booking Content -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
			<!-- Booking Form -->
			<div class="lg:col-span-2">
				<h2 class="mb-6 text-3xl font-bold text-[var(--color-navy)]">Appointment Details</h2>
				<BookingForm {form} services={data.services} />
			</div>

			<!-- Booking Information -->
			<div class="space-y-8">
				<div class="rounded-lg bg-[var(--color-neutral-50)] p-6">
					<h3 class="mb-4 text-2xl font-bold text-[var(--color-navy)]">Opening Hours</h3>
					<OpeningHours />
				</div>

				<div class="rounded-lg bg-[var(--color-neutral-50)] p-6">
					<h3 class="mb-4 text-2xl font-bold text-[var(--color-navy)]">What to Expect</h3>
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

				<div class="rounded-lg bg-[var(--color-navy)] p-6 text-white">
					<h3 class="mb-2 text-xl font-bold">Need Help?</h3>
					<p class="mb-4">Prefer to book by phone?</p>
					<a
						href="tel:07395292575"
						class="inline-block w-full rounded-lg bg-[var(--color-gold)] px-6 py-3 text-center font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-light)]"
					>
						Call Us
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
