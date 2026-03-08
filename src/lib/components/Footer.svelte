<script lang="ts">
	import { businessInfo } from '$lib/data/business';
	import ContactInfo from './ContactInfo.svelte';
	import OpeningHours from './OpeningHours.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<footer
	class="border-t border-[var(--color-gold)]/30 text-white"
	style="background: linear-gradient(to bottom, var(--color-neutral-900), #1a1a2e);"
>
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Contact Information -->
			<div>
				<h3
					class="heading-accent heading-accent-left mb-6 font-serif text-xl font-bold tracking-wide text-[var(--color-gold)]"
				>
					Contact Us
				</h3>
				<ContactInfo />
			</div>

			<!-- Opening Hours -->
			<div>
				<h3
					class="heading-accent heading-accent-left mb-6 font-serif text-xl font-bold tracking-wide text-[var(--color-gold)]"
				>
					Opening Hours
				</h3>
				<OpeningHours />
			</div>

			<!-- Social & Quick Links -->
			<div>
				<h3
					class="heading-accent heading-accent-left mb-6 font-serif text-xl font-bold tracking-wide text-[var(--color-gold)]"
				>
					Follow Us
				</h3>
				<SocialLinks />

				<div class="mt-6">
					<nav aria-label="Footer navigation">
						<ul class="space-y-2" role="list">
							<li>
								<a
									href="/services"
									class="footer-link relative inline-block transition-colors hover:text-[var(--color-gold)]"
									>Services</a
								>
							</li>
							<li>
								<a
									href="/reviews"
									class="footer-link relative inline-block transition-colors hover:text-[var(--color-gold)]"
									>Reviews</a
								>
							</li>
							<li>
								<a
									href="/referral"
									class="footer-link relative inline-block transition-colors hover:text-[var(--color-gold)]"
									>Referral Programme</a
								>
							</li>
							<li>
								<a
									href="/booking"
									class="footer-link relative inline-block transition-colors hover:text-[var(--color-gold)]"
									>Book Now</a
								>
							</li>
							<li>
								<a
									href="/contact"
									class="footer-link relative inline-block transition-colors hover:text-[var(--color-gold)]"
									>Contact</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-700/50 pt-8 text-center text-sm text-gray-400">
			<p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
			<p class="mt-2">
				Website design by <a
					href="https://www.elliotjreed.com?utm_source=www.studio210hair.co.uk"
					class="transition-colors hover:text-[var(--color-gold)]"
					target="_blank"
					rel="noopener noreferrer">www.elliotjreed.com</a
				>
			</p>
		</div>
	</div>
</footer>
