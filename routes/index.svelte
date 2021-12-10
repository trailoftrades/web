<script lang="ts" context="module">
	export const load: Load = async ({ fetch, page }) => {
		try {
			const response = await fetch(
				`/companies?filter=${page.query.get(COMPANY_FILTER_KEY) ?? ''}`
			)

			if (!response.ok)
				return { status: response.status, error: await response.text() }

			initialCompanies.set(await response.json())

			return {}
		} catch (error) {
			return {
				status: 500,
				error: error instanceof Error ? error : UNKNOWN_ERROR_MESSAGE
			}
		}
	}
</script>

<script lang="ts">
	import type { Load } from '@sveltejs/kit'

	import { COMPANY_FILTER_KEY } from '../lib/company/filter'
	import initialCompanies from '../lib/company/initial'
	import companies from '../lib/company/companies'
	import UNKNOWN_ERROR_MESSAGE from '../lib/error/unknown'
</script>

<svelte:head>
	<title>Trail of Trades</title>
</svelte:head>

{#if $companies}
	{#each $companies as company (company.id)}
		<p>{JSON.stringify(company)}</p>
	{/each}
{:else}
	<p>Restricted</p>
{/if}
