<script lang="ts">
	import { businessInfo } from '$lib/data/business';
</script>

<dl class="space-y-1">
	{#each businessInfo.openingHours as { day, hours, isOpen }}
		<div class="flex justify-between gap-4">
			<dt class="font-medium">{day}:</dt>
			<dd class={isOpen ? '' : 'text-gray-500'}>{hours}</dd>
		</div>
	{/each}
</dl>
