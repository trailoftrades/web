<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const response = await fetch(`/api/companies/${page.params.company}`)

			if (!response.ok)
				return { status: response.status, error: await response.text() }

			initialCompany.set(await response.json())

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

	import initialCompany from '../../lib/company/current/initial'
	import overlay from '../../lib/overlay'
	import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'
	import Overlay from '../../components/Company/Overlay.svelte'

	$: $overlay = true
</script>

<Overlay>
	<slot />
</Overlay>
