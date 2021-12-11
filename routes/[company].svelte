<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const id = page.params.company
			if (typeof id !== 'string') return { status: 400, error: 'Invalid ID' }

			const response = await fetch(`/api/companies/${id}`)

			if (!response.ok)
				return { status: response.status, error: await response.text() }

			return {
				props: { company: await response.json() }
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

	import type Company from '../lib/company'
	import overlay from '../lib/overlay'
	import UNKNOWN_ERROR_MESSAGE from '../lib/error/unknown'
	import Overlay from '../components/Company/Overlay.svelte'

	export let company: Company

	$: $overlay = true
</script>

<svelte:head>
	<title>{company.name} | Trail of Trades</title>
</svelte:head>

<Overlay {company} />
