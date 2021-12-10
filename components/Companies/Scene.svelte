<script lang="ts">
	import Buildings from './Buildings.svelte'
	import Road from './Road.svelte'
</script>

<div>
	<Buildings />
	<Road />
</div>

<style lang="scss">
	div {
		display: grid;
		grid: 1fr auto / 1fr;
		height: 100%;
	}
</style>
