<script lang="ts">
	import company from '../../lib/company/current'
	import Chart from '../../components/Chart.svelte'
</script>

<p>Evaluation for {$company?.name ?? 'unknown company'}</p>
<Chart />

<style lang="scss">
	@use 'shared/colors';

	p {
		color: colors.$black;
	}
</style>
