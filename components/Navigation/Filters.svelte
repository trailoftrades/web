<script lang="ts">
	import Filter from './Filter.svelte'
</script>

<div>
	<Filter id="top">Top</Filter>
	<Filter id="owned">My companies</Filter>
	<Filter id="invested">Investments</Filter>
</div>

<style lang="scss">
	div {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		margin: 0 1rem;
	}
</style>
