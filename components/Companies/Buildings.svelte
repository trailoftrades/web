<script lang="ts">
	import companies from '../../lib/company/companies'
	import background from '../../shared/background.png'
</script>

<svelte:head>
	<link rel="preload" as="image" type="image/png" href={background} />
</svelte:head>

<div>
	{#if $companies}
		{#each $companies as company (company.id)}
			<p>{company.name} (${company.rate}/hour) (${company.cash} total)</p>
		{/each}
	{:else}
		<p>Loading...</p>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: flex-end;
		background: url('../../shared/background.png') no-repeat center center;
		background-size: cover;
	}

	p + :global(p) {
		margin-left: 2rem;
	}
</style>
