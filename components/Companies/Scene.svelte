<script lang="ts">
	import background from '../../shared/background.png'
	import Navbar from '../Navigation/Navbar.svelte'
	import Companies from './Companies.svelte'
	import Road from './Road.svelte'
</script>

<svelte:head>
	<link rel="preload" as="image" type="image/png" href={background} />
</svelte:head>

<main>
	<Navbar />
	<Companies />
	<Road />
</main>

<style lang="scss">
	main {
		display: grid;
		grid: auto 1fr auto / 1fr;
		height: 100%;
		background: url('../../shared/background.png') no-repeat center center;
		background-size: cover;
	}
</style>
