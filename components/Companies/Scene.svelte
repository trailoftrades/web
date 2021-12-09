<script lang="ts">
	import Road from './Road.svelte'
</script>

<main>
	<div>Companies</div>
	<Road />
</main>

<style lang="scss">
	@use 'shared/colors';

	main {
		display: grid;
		grid: 1fr auto / 1fr;
		height: 100%;
		background: colors.$sky;
	}
</style>
