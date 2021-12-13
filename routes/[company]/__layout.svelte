<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const response = await fetch(`/api/companies/${page.params.company}`)

			if (!response.ok)
				return { status: response.status, error: await response.text() }

			return {
				props: { initial: await response.json() }
			}
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

	import { page } from '$app/stores'

	import type Company from '../../lib/company'
	import createCompanyStore from '../../lib/company/store/create'
	import overlay from '../../lib/overlay'
	import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'
	import Overlay from '../../components/Company/Overlay.svelte'

	export let initial: Company | null
	$: company = createCompanyStore($page.params.company, initial)

	$: $overlay = true
</script>

<svelte:head>
	<title>{$company?.name ?? 'Company not found'} | Trail of Trades</title>
</svelte:head>

<Overlay company={$company}>
	<slot />
</Overlay>
