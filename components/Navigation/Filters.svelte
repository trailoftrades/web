<script lang="ts">
	import Chart from 'svelte-icons/fa/FaChartLine.svelte'
	import User from 'svelte-icons/fa/FaUserTie.svelte'
	import Cash from 'svelte-icons/fa/FaHandHoldingUsd.svelte'

	import Filter from './Filter.svelte'
</script>

<div>
	<Filter id="top" name="Top">
		<Chart />
	</Filter>
	<Filter id="owned" name="My companies">
		<User />
	</Filter>
	<Filter id="invested" name="Investments">
		<Cash />
	</Filter>
</div>

<style lang="scss">
	div {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		margin: 0 1rem;
	}
</style>
