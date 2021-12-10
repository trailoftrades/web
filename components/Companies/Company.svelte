<script lang="ts">
	import type Company from '../../lib/company'
	import formatNumber from '../../lib/format/number'

	export let company: Company
	export let maxCash: number

	$: relativeCash = company.cash / maxCash
</script>

<div style="--cash: {relativeCash.toFixed(2)}; --color: {company.color};">
	<h3>{company.name}</h3>
	<p>${formatNumber(company.rate)}/hour</p>
	<p>${formatNumber(company.cash)}</p>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 12rem;
		height: calc(var(--cash) * 90%);
		text-align: center;
		background: var(--color);
		transition: height 0.3s;
	}

	p {
		margin-top: 0.5rem;
	}
</style>
