<script lang="ts">
	import company from '../../lib/company/current'
	import Chart from '../../components/Chart/Time.svelte'
</script>

<div>
	<p>Evaluation for {$company?.name ?? 'unknown company'}</p>
	<Chart points={[]} />
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
