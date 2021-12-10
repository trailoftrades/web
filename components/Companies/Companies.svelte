<script lang="ts">
	import companies from '../../lib/company/companies'
	import Company from './Company.svelte'

	$: maxCash = ($companies ?? []).reduce(
		(max, { cash }) => Math.max(max, cash),
		0
	)
</script>

<div>
	{#if $companies}
		{#each $companies as company (company.id)}
			<Company {company} {maxCash} />
		{/each}
	{:else}
		<p>Uh oh! Why don't you sign in instead.</p>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: flex-end;
	}

	p + :global(p) {
		margin-left: 2rem;
	}
</style>
