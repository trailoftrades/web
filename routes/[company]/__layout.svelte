<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const companyResponse = await fetch(
				`/api/companies/${encodeURIComponent(page.params.company)}`
			)

			if (!companyResponse.ok)
				throw await HttpError.fromResponse(companyResponse)

			const company: Company = await companyResponse.json()

			if (company.owner) {
				const ownerResponse = await fetch(
					`/api/users/${encodeURIComponent(company.owner)}`
				)

				if (!ownerResponse.ok) throw await HttpError.fromResponse(ownerResponse)

				companyOwner.set(await ownerResponse.json())
			} else {
				companyOwner.set(null)
			}

			initialCompany.set(company)

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

	import type Company from '../../lib/company'
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
