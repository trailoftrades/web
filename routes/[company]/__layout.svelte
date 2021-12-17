<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const response = await fetch(
				`/api/companies/${encodeURIComponent(page.params.company)}?owner`
			)

			if (!response.ok) throw await HttpError.fromResponse(response)

			const company: CompanyWithOwner | null = await response.json()
			const owner = company && company.owner

			initialCompany.set(company && { ...company, owner: owner && owner.id })
			companyOwner.set(owner)

			return {}
		} catch (error) {
			return {
				status: error instanceof HttpError ? error.code : 500,
				error: error instanceof Error ? error : UNKNOWN_ERROR_MESSAGE
			}
		}
	}
</script>

<script lang="ts">
	import type { Load } from '@sveltejs/kit'

	import type CompanyWithOwner from '../../lib/company/owner/with'
	import initialCompany from '../../lib/company/current/initial'
	import companyOwner from '../../lib/company/owner'
	import overlay from '../../lib/overlay'
	import HttpError from '../../lib/error/http'
	import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'
	import Overlay from '../../components/Company/Overlay.svelte'

	$: $overlay = true
</script>

<Overlay>
	<slot />
</Overlay>
