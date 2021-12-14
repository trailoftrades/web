<script lang="ts">
	import Chart from 'svelte-icons/fa/FaChartLine.svelte'
	import User from 'svelte-icons/fa/FaUserTie.svelte'
	import Cash from 'svelte-icons/fa/FaHandHoldingUsd.svelte'

	import Page from './Page.svelte'
</script>

<div>
	<Page name="Evaluation">
		<Chart />
	</Page>
	<Page path="operations" name="Operations">
		<User />
	</Page>
	<Page path="invest" name="Invest">
		<Cash />
	</Page>
</div>

<style lang="scss">
	div {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		margin: 0 1rem;
	}
</style>
