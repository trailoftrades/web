<script lang="ts">
	import type Company from '../../lib/company'
	import formatNumber from '../../lib/format/number'

	export let company: Company
	export let maxCash: number

	$: relativeCash = company.cash / maxCash
</script>

<div
	style="
		--cash: {relativeCash.toFixed(2)};
		--color: {company.color};
	"
>
	<h3>{company.name}</h3>
	<p>${formatNumber(company.rate)}/hour</p>
	<p>${formatNumber(company.cash)}</p>
</div>

<style lang="scss">
	@use 'shared/colors';

	$spacing: 1rem;
	$border-width: 0.3rem;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 12rem;
		height: calc(var(--cash) * 90%);
		overflow: hidden;
		margin-left: $spacing + $border-width;
		text-align: center;
		color: #ddd;
		background: transparentize(#bbb, 0.3);
		box-shadow: 0 0 0 $border-width #555,
			0 0.5rem 1.5rem $border-width transparentize(colors.$black, 0.7);
		border-radius: 1px;
		transition: height 0.3s;
		animation: rise 0.3s;

		@keyframes rise {
			from {
				height: 0;
			}
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: var(--color);
			z-index: -1;
		}
	}

	p {
		margin-top: 0.5rem;
	}
</style>
