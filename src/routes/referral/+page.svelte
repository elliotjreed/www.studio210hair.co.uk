<script lang="ts">
	import type { PageData } from './$types';
	import SEOHead from '$lib/components/SEOHead.svelte';

	let { data }: { data: PageData } = $props();
</script>

<SEOHead {...data.seo} />

<!-- Page Header -->
<section
	class="relative bg-cover bg-center py-16"
	style="background-image: url('/photos/hair-styling.jpg');"
>
	<!-- Dark overlay for text readability -->
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 container mx-auto px-4 text-center">
		<h1 class="mb-6 text-4xl font-bold text-white md:text-5xl">Referral Programme</h1>
		<p class="mx-auto max-w-3xl text-xl text-white">
			Share the love and save together! Refer a friend and you both get £5 off.
		</p>
	</div>
</section>

<!-- How It Works Section -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-12 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
				How It Works
			</h2>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<!-- Step 1 -->
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)]"
					>
						<span class="text-2xl font-bold text-[var(--color-navy)]">1</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-[var(--color-navy)]">Refer a Friend</h3>
					<p class="text-gray-700">
						Tell your friends and family about Studio210. Share your experience and recommend our
						services.
					</p>
				</div>

				<!-- Step 2 -->
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)]"
					>
						<span class="text-2xl font-bold text-[var(--color-navy)]">2</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-[var(--color-navy)]">They Book & Mention You</h3>
					<p class="text-gray-700">
						When your friend books their first appointment, they mention your name to receive their
						discount.
					</p>
				</div>

				<!-- Step 3 -->
				<div class="text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold)]"
					>
						<span class="text-2xl font-bold text-[var(--color-navy)]">3</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-[var(--color-navy)]">You Both Save £5</h3>
					<p class="text-gray-700">
						Your friend gets £5 off their first appointment, and you get £5 off your next visit!
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Benefits Section -->
<section class="bg-[var(--color-neutral-50)] py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-4xl">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<!-- For Existing Customers -->
				<div class="rounded-lg bg-white p-8 shadow-md">
					<div class="mb-4 flex items-center gap-3">
						<svg
							class="h-8 w-8 text-[var(--color-gold)]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<h3 class="text-2xl font-bold text-[var(--color-navy)]">For Existing Customers</h3>
					</div>
					<div class="mb-6 rounded-lg bg-[var(--color-gold)] p-6 text-center">
						<p class="text-3xl font-bold text-[var(--color-navy)]">£5 OFF</p>
						<p class="text-sm text-[var(--color-navy)]">Your Next Appointment</p>
					</div>
					<ul class="space-y-3" role="list">
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
							<span class="text-gray-700">Must have had at least one previous appointment</span>
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
							<span class="text-gray-700">Discount applied to your next booking</span>
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
							<span class="text-gray-700"
								>No limit on referrals - refer as many friends as you like!</span
							>
						</li>
					</ul>
				</div>

				<!-- For New Customers -->
				<div class="rounded-lg bg-white p-8 shadow-md">
					<div class="mb-4 flex items-center gap-3">
						<svg
							class="h-8 w-8 text-[var(--color-gold)]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
						<h3 class="text-2xl font-bold text-[var(--color-navy)]">For New Customers</h3>
					</div>
					<div class="mb-6 rounded-lg bg-[var(--color-gold)] p-6 text-center">
						<p class="text-3xl font-bold text-[var(--color-navy)]">£5 OFF</p>
						<p class="text-sm text-[var(--color-navy)]">Your First Appointment</p>
					</div>
					<ul class="space-y-3" role="list">
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
							<span class="text-gray-700">Must be a first-time client at Studio210</span>
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
							<span class="text-gray-700">Mention your referrer's name when booking</span>
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
							<span class="text-gray-700">Discount applied to your first appointment</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- How to Redeem Section -->
<section class="bg-white py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
				How to Redeem Your Discount
			</h2>

			<div class="rounded-lg bg-[var(--color-neutral-50)] p-8">
				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]"
							>
								<svg
									class="h-6 w-6 text-[var(--color-navy)]"
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
							</div>
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold text-[var(--color-navy)]">Book by Phone</h3>
							<p class="text-gray-700">
								Call us at <a
									href="tel:07395292575"
									class="font-semibold text-[var(--color-gold)] hover:underline">07395 292575</a
								> and mention the name of the person who referred you when booking.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]"
							>
								<svg
									class="h-6 w-6 text-[var(--color-navy)]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold text-[var(--color-navy)]">Book Online</h3>
							<p class="text-gray-700">
								Use our <a
									href="/booking"
									class="font-semibold text-[var(--color-gold)] hover:underline"
									>online booking form</a
								> and include the referrer's name in the message field.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div class="flex-shrink-0">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-gold)]"
							>
								<svg
									class="h-6 w-6 text-[var(--color-navy)]"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold text-[var(--color-navy)]">Visit in Person</h3>
							<p class="text-gray-700">
								Stop by our salon at 210 Bestwood Park Drive and let us know who referred you when
								you book.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Terms & Conditions -->
<section class="bg-[var(--color-neutral-50)] py-16">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl">
			<h2 class="mb-8 text-center text-3xl font-bold text-[var(--color-navy)] md:text-4xl">
				Terms & Conditions
			</h2>

			<div class="rounded-lg bg-white p-8 shadow-md">
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
						<span
							>Referrer must have had at least one completed appointment at Studio210 to be eligible</span
						>
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
						<span>New customer must be a first-time client at Studio210</span>
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
						<span>Referrer's name must be mentioned at the time of booking</span>
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
						<span>Both discounts are applied to the total service cost</span>
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
						<span>Discounts cannot be combined with other promotional offers</span>
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
						<span>No cash alternative available</span>
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
						<span
							>Studio210 reserves the right to modify or terminate this programme at any time</span
						>
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
						<span
							>The new customer must complete their first appointment for the referrer to receive
							their discount</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section
	class="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-dark)] py-16 text-white"
>
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-3xl font-bold md:text-4xl">Start Referring Today!</h2>
		<p class="mx-auto mb-8 max-w-2xl text-xl">
			Share the Studio210 experience with your friends and family, and enjoy £5 off together.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/booking"
				class="inline-block rounded-lg bg-[var(--color-gold)] px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-gold-light)]"
			>
				Book Appointment
			</a>
			<a
				href="/contact"
				class="inline-block rounded-lg bg-white px-8 py-3 text-lg font-semibold text-[var(--color-navy)] transition-colors hover:bg-gray-100"
			>
				Contact Us
			</a>
		</div>
	</div>
</section>
