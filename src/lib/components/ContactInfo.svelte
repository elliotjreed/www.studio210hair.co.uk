<script lang="ts">
	import { businessInfo } from '$lib/data/business';
</script>

<address class="space-y-2 not-italic">
	<div>
		<p class="font-semibold">{businessInfo.name}</p>
		<p>{businessInfo.address.street}</p>
		<p>{businessInfo.address.area}</p>
		<p>
			{businessInfo.address.city}, {businessInfo.address.postcode}
		</p>
	</div>

	<div class="space-y-1">
		<p>
			<a
				href={`tel:${businessInfo.contact.phone.replace(/\s/g, '')}`}
				class="transition-colors hover:text-[var(--color-gold)]"
				aria-label="Call us"
			>
				{businessInfo.contact.phone}
			</a>
		</p>
		<p>
			<a
				href={`mailto:${businessInfo.contact.email}`}
				class="transition-colors hover:text-[var(--color-gold)]"
				aria-label="Email us"
			>
				{businessInfo.contact.email}
			</a>
		</p>
	</div>
</address>
