<script lang="ts">
	import { fade } from 'svelte/transition'

	import Navbar from './Navigation/Navbar.svelte'
</script>

<main transition:fade={{ duration: 150 }}>
	<Navbar />
	<slot />
</main>

<style lang="scss">
	@use 'shared/z-index';

	main {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 2rem 2.5rem;
		background: rgba(white, 0.5);
		backdrop-filter: blur(0.63rem);
		z-index: z-index.$overlay;
	}
</style>
