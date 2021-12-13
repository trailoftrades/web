<script lang="ts">
	import companies from '../../lib/company/companies'
	import Company from './Company.svelte'

	export let top: DOMRect | null
	export let bottom: DOMRect | null

	$: position = top &&
		bottom && [
			`--top: ${top.bottom.toFixed(2)}px`,
			`--left: ${bottom.left.toFixed(2)}px`,
			`--width: ${bottom.width.toFixed(2)}px`,
			`--height: ${(bottom.top - top.bottom).toFixed(2)}px`
		]

	$: maxCash =
		$companies?.reduce((max, { cash }) => Math.max(max, cash), 0) ?? 0
</script>

<div hidden={!position} style={position?.join(';')}>
	{#if $companies}
		{#each $companies as company (company.id)}
			<Company {company} {maxCash} />
		{/each}
	{:else if $companies === null}
		<p>Uh oh! Why don't you sign in instead.</p>
	{/if}
</div>

<style lang="scss">
	div {
		flex-shrink: 0;
		display: flex;
		align-items: flex-end;
		position: fixed;
		top: var(--top);
		left: var(--left);
		width: var(--width);
		height: var(--height);
	}

	[hidden] {
		display: none;
	}

	p + :global(p) {
		margin-left: 2rem;
	}
</style>
