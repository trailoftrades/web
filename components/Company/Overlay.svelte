<script lang="ts">
	import { fade } from 'svelte/transition'

	import company from '../../lib/company/current'
	import Navbar from './Navigation/Navbar.svelte'
</script>

<main transition:fade={{ duration: 150 }}>
	<Navbar />
	{#if $company}
		<slot />
	{:else}
		<h2>This company doesn't exist</h2>
	{/if}
</main>

<style lang="scss">
	@use 'shared/z-index';

	main {
		display: grid;
		grid: auto 1fr / 1fr;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow-y: auto;
		background: rgba(white, 0.5);
		backdrop-filter: blur(0.63rem);
		z-index: z-index.$overlay;
	}

	h2 {
		justify-self: center;
		align-self: center;
		padding: 2rem 2.5rem;
		text-align: center;
		font-size: 3rem;
		font-weight: 900;
	}
</style>
