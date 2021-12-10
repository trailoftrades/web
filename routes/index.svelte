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
	import UNKNOWN_ERROR_MESSAGE from '../lib/error/unknown'
	import Companies from '../components/Companies/Scene.svelte'
</script>

<svelte:head>
	<title>Trail of Trades</title>
</svelte:head>

<Companies />
