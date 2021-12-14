<script lang="ts">
	import { page } from '$app/stores'

	import type { CompanyFilter } from '../../lib/company/filter'
	import companyFilter, {
		COMPANY_FILTER_KEY,
		DEFAULT_COMPANY_FILTER
	} from '../../lib/company/filter'
	import queryStringWith from '../../lib/query/with/string'

	export let id: CompanyFilter
	export let name: string

	$: href = `/${queryStringWith(
		$page.query,
		COMPANY_FILTER_KEY,
		id === DEFAULT_COMPANY_FILTER ? null : id
	)}`

	$: active = id === $companyFilter
</script>

<svelte:head>
	{#if active}
		<title>
			{id === DEFAULT_COMPANY_FILTER ? '' : `${name} - `}Trail of Trades
		</title>
	{/if}
</svelte:head>

<a {href} aria-current={active ? 'page' : undefined}>
	<slot />
	{name}
</a>

<style lang="scss">
	@use 'shared/colors';

	a {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		white-space: nowrap;
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 700;
		color: white;
		text-shadow: 0.5rem 0.5rem 2rem rgba(colors.$black, 0.4);
		transition: color 0.3s, opacity 0.3s;

		&:hover {
			opacity: 0.5;
		}

		& + :global(a) {
			margin-left: 2rem;
		}

		> :global(svg) {
			height: 1.5rem;
			margin-right: 0.5rem;
		}
	}

	[aria-current] {
		color: colors.$selected;

		&:hover {
			opacity: 0.7;
		}
	}
</style>
