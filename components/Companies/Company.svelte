<script lang="ts">
	import type Company from '../../lib/company'

	export let company: Company
	export let maxCash: number

	$: relativeCash = company.cash / maxCash
</script>

<div style="--cash: {relativeCash}; --color: {company.color};" />

<style lang="scss">
	div {
		width: 12rem;
		height: calc(var(--cash) * 90%);
		background: var(--color);
		transition: height 0.3s;
	}
</style>
