<script lang="ts">
	import background from '../../shared/background.jpg'
	import Road from './Road.svelte'
</script>

<svelte:head>
	<link rel="preload" as="image" type="image/jpeg" href={background} />
</svelte:head>

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
	}

	div {
		background: url('../../shared/background.jpg') no-repeat center center;
		background-size: cover;
	}
</style>
