<script lang="ts">
	import type Evaluation from '../../lib/company/evaluation'
	import company from '../../lib/company/current'
	import formatNumber from '../../lib/format/number'
	import RateIndicator from './RateIndicator.svelte'
	import Chart from '../Chart/Time.svelte'

	export let property: 'rate' | 'cash'
	export let evaluations: Evaluation[] | null

	$: points = evaluations?.map(({ time: x, [property]: y }) => ({ x, y }))

	const formatLabel = (cash: number) =>
		`$${formatNumber(cash)}${property === 'rate' ? `/hour` : ''}`
</script>

<div class="header">
	<h4 data-property={property}>
		{#if $company}
			{formatNumber($company[property] ?? 0)}
		{/if}
	</h4>
	{#if property === 'rate'}
		<RateIndicator />
	{/if}
</div>

<div class="chart">
	{#if points}
		<Chart
			{points}
			label={formatLabel}
			fontSize={20}
			fontWeight="bold"
			textColor="#1c1c1e"
			backgroundColor="#12b412"
			borderColor="#12b41277"
			borderWidth={4}
		/>
	{/if}
</div>

<style lang="scss">
	@use 'shared/colors';

	.header {
		display: flex;
		align-items: center;
	}

	h4 {
		font-size: 2rem;
		font-weight: 900;
		color: colors.$black;

		&::before {
			content: '$';
		}

		&::after {
			opacity: 0.5;
		}
	}

	[data-property='rate']::after {
		content: '/hour';
	}

	[data-property='cash']::after {
		content: ' net worth';
	}

	.header > :global(svg) {
		width: 2.2rem;
		margin-left: 2rem;
		color: colors.$black;
		transform: translateY(0.1rem);
	}

	.chart {
		width: 95%; // Chart is unable to downsize if full width
	}
</style>
