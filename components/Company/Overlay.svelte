<script lang="ts">
	import { fade } from 'svelte/transition'

	import Navbar from './Navigation/Navbar.svelte'
	import Info from './Info.svelte'
</script>

<main transition:fade={{ duration: 150 }}>
	<div>
		<Navbar />
		<Info />
	</div>
	<slot />
</main>

<style lang="scss">
	@use 'shared/z-index';

	$vertical-spacing: 2rem;

	main {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: $vertical-spacing 2.5rem;
		background: rgba(white, 0.5);
		backdrop-filter: blur(0.63rem);
		z-index: z-index.$overlay;
	}

	div {
		margin-bottom: $vertical-spacing;
	}
</style>
