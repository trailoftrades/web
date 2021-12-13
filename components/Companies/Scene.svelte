<script lang="ts">
	import overlay from '../../lib/overlay'
	import background from '../../shared/background.png'
	import Navbar, { position as navbar } from '../Navigation/Navbar.svelte'
	import Companies from './Companies.svelte'
	import Road, { position as road } from './Road.svelte'
</script>

<svelte:head>
	<link rel="preload" as="image" type="image/png" href={background} />
</svelte:head>

<main aria-hidden={$overlay}>
	<Navbar />
	<Companies top={$navbar} bottom={$road} />
	<Road />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		background: url('../../shared/background.png') no-repeat center center;
		background-size: cover;
	}
</style>
