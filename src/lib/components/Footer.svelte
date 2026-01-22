<script lang="ts">
	import { businessInfo } from '$lib/data/business';
	import ContactInfo from './ContactInfo.svelte';
	import OpeningHours from './OpeningHours.svelte';
	import SocialLinks from './SocialLinks.svelte';
</script>

<footer class="bg-[var(--color-neutral-900)] text-white">
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- Contact Information -->
			<div>
				<h3 class="mb-4 text-xl font-bold text-[var(--color-gold)]">Contact Us</h3>
				<ContactInfo />
			</div>

			<!-- Opening Hours -->
			<div>
				<h3 class="mb-4 text-xl font-bold text-[var(--color-gold)]">Opening Hours</h3>
				<OpeningHours />
			</div>

			<!-- Social & Quick Links -->
			<div>
				<h3 class="mb-4 text-xl font-bold text-[var(--color-gold)]">Follow Us</h3>
				<SocialLinks />

				<div class="mt-6">
					<nav aria-label="Footer navigation">
						<ul class="space-y-2" role="list">
							<li>
								<a href="/services" class="transition-colors hover:text-[var(--color-gold)]"
									>Services</a
								>
							</li>
							<li>
								<a href="/reviews" class="transition-colors hover:text-[var(--color-gold)]"
									>Reviews</a
								>
							</li>
							<li>
								<a href="/referral" class="transition-colors hover:text-[var(--color-gold)]"
									>Referral Programme</a
								>
							</li>
							<li>
								<a href="/booking" class="transition-colors hover:text-[var(--color-gold)]"
									>Book Now</a
								>
							</li>
							<li>
								<a href="/contact" class="transition-colors hover:text-[var(--color-gold)]"
									>Contact</a
								>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
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
