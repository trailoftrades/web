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
	import company from '../../lib/company/current'
	import HttpError from '../../lib/error/http'
	import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'
	import Chart from '../../components/Chart/Time.svelte'

	export let evaluations: Evaluation[] | null
</script>

<div>
	<p>Evaluation for {$company?.name ?? 'unknown company'}</p>
	{#if evaluations}
		<Chart
			points={evaluations.map(({ time, rate }) => ({ x: time, y: rate }))}
		/>
		<Chart
			points={evaluations.map(({ time, cash }) => ({ x: time, y: cash }))}
		/>
	{/if}
</div>

<style lang="scss">
	@use 'shared/colors';

	p {
		margin-bottom: 1rem;
		font-weight: 900;
		color: colors.$black;
	}

	div {
		padding: 0 2.5rem 2rem;
	}
</style>
