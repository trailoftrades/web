<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const filter =
				page.query.get(COMPANY_FILTER_KEY) ?? DEFAULT_COMPANY_FILTER

			const response = await fetch(
				`/api/companies?filter=${encodeURIComponent(filter)}`
			)

			if (!response.ok) throw await HttpError.fromResponse(response)

			initialCompanies.set(await response.json())

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

	import {
		COMPANY_FILTER_KEY,
		DEFAULT_COMPANY_FILTER
	} from '../lib/company/filter'
	import initialCompanies from '../lib/company/companies/initial'
	import overlay from '../lib/overlay'
	import HttpError from '../lib/error/http'
	import UNKNOWN_ERROR_MESSAGE from '../lib/error/unknown'

	$: $overlay = false
</script>
