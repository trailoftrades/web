<script lang="ts">
	import { page } from '$app/stores'

	import company from '../../../lib/company/current'
	import queryString from '../../../lib/query/string'

	const URL_MATCH = /^\/[^\/]+\/?([^\/]*)/

	export let path = ''
	export let name: string

	$: id = $page.params.company
	$: href = `/${encodeURIComponent(id)}${path && '/'}${path}${queryString(
		$page.query
	)}`

	$: active = $page.path.match(URL_MATCH)?.[1] === path
</script>

<svelte:head>
	{#if active}
		<title>
			{$company ? `${name} - ${$company.name}` : 'Company not found'}
		</title>
	{/if}
</svelte:head>

<a
	{href}
	aria-current={active ? 'page' : undefined}
	aria-disabled={!$company || undefined}
>
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
		color: colors.$black;
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

	[aria-disabled] {
		pointer-events: none;
		opacity: 0.5;
	}
</style>
