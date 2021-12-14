<script lang="ts">
	import type Evaluation from '../../lib/company/evaluation'
	import company from '../../lib/company/current'
	import formatNumber from '../../lib/format/number'
	import Chart from '../Chart/Time.svelte'

	export let property: 'rate' | 'cash'
	export let evaluations: Evaluation[] | null

	$: points = evaluations?.map(({ time: x, [property]: y }) => ({ x, y }))
</script>

<h4 data-property={property}>
	{#if $company}
		{formatNumber($company[property] ?? 0)}
	{/if}
</h4>

<div>
	{#if points}
		<Chart {points} />
	{/if}
</div>

<style lang="scss">
	@use 'shared/colors';

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

	div {
		width: 95%; // Chart is unable to downsize if full width
	}
</style>
