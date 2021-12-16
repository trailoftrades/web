<script lang="ts">
	import type Company from '../../lib/company'
	import formatNumber from '../../lib/format/number'

	export let company: Company
	export let maxCash: number

	$: relativeCash = Math.max(0, (company.cash ?? 0) / maxCash)
</script>

<a
	href={`/${encodeURIComponent(company.id)}`}
	style="--cash: {relativeCash.toFixed(2)}; --color: {company.color};"
>
	<span class="name">{company.name}</span>
	<span class="rate">{formatNumber(company.rate ?? 0)}</span>
	<span class="cash">{formatNumber(company.cash ?? 0)}</span>
</a>

<style lang="scss">
	@use 'shared/colors';

	$min-height: 30%;
	$max-height: 90%;

	$spacing: 1rem;
	$border-width: 0.3rem;

	a {
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 12rem;
		height: max($min-height, var(--cash) * $max-height);
		overflow: hidden;
		margin-left: $spacing + $border-width;
		padding: 0.7rem 0.75rem;
		text-align: center;
		text-decoration: none;
		color: #ddd;
		background: rgba(#bbb, 0.7);
		box-shadow: 0 0 0 $border-width #555,
			0 0.5rem 1.5rem $border-width rgba(colors.$black, 0.3);
		border-radius: 1px;
		transition: height 0.3s;
		animation: rise 0.3s;

		@keyframes rise {
			from {
				height: 0;
			}
		}

		&:hover {
			height: calc(max($min-height, var(--cash) * $max-height) + 0.5rem);
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

	.name {
		line-height: 1.2;
		font-size: 1.3rem;
		font-weight: 900;
	}

	.rate,
	.cash {
		margin-top: 0.5rem;
		font-weight: 700;

		&::before {
			content: '$';
		}

		&::after {
			opacity: 0.7;
		}
	}

	.rate::after {
		content: '/hour';
	}

	.cash::after {
		content: ' net worth';
	}
</style>
