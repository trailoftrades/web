<script lang="ts">
	import companies from '../../lib/company/companies'
	import Company from './Company.svelte'

	export let top: DOMRect | null
	export let bottom: DOMRect | null

	$: maxCash = ($companies ?? []).reduce(
		(max, { cash }) => Math.max(max, cash),
		0
	)
</script>

<div
	aria-hidden={!(top && bottom)}
	style="
		--top: {top?.bottom.toFixed(2) ?? 0}px;
		--left: {bottom?.left.toFixed(2) ?? 0}px;
		--width: {bottom?.width.toFixed(2) ?? 0}px;
		--height: {top && bottom ? (bottom.top - top.bottom).toFixed(2) : 0}px;
	"
>
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
		position: fixed;
		top: var(--top);
		left: var(--left);
		width: var(--width);
		height: var(--height);
	}

	p + :global(p) {
		margin-left: 2rem;
	}
</style>
