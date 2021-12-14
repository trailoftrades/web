<script lang="ts" context="module">
	export const load: Load = async ({ page, fetch }) => {
		try {
			const response = await fetch(
				`/api/companies/${encodeURIComponent(page.params.company)}/evaluations`
			)

			if (!response.ok) throw await HttpError.fromResponse(response)

			return {
				props: { evaluations: await response.json() }
			}
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

	import type Evaluation from '../../lib/company/evaluation'
	import HttpError from '../../lib/error/http'
	import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'
	import EvaluationInfo from '../../components/Company/Evaluation.svelte'

	export let evaluations: Evaluation[] | null
</script>

<div>
	<EvaluationInfo property="rate" {evaluations} />
	<EvaluationInfo property="cash" {evaluations} />
</div>

<style lang="scss">
	div {
		$horizontal-padding: 2.5rem;
		$offset: 1%;

		display: grid;
		grid-auto-flow: column;
		grid-template-rows: auto 1fr;
		grid-auto-columns: 1fr;
		gap: 2rem 2.5rem;
		padding: 8rem calc($horizontal-padding - $offset) 2rem
			calc($horizontal-padding + $offset);
	}
</style>
