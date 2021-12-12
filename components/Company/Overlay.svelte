<script lang="ts">
	import { fade } from 'svelte/transition'

	import type Company from '../../lib/company'

	export let company: Company | null
</script>

<main transition:fade={{ duration: 150 }}>
	<h1>{company?.name ?? 'Company not found'}</h1>
	<a href="/">Close</a>
</main>

<style lang="scss">
	@use 'shared/colors';
	@use 'shared/z-index';

	main {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		padding: 2rem 2.5rem;
		background: transparentize(white, 0.5);
		backdrop-filter: blur(0.63rem);
		z-index: z-index.$overlay;
	}

	h1 {
		font-size: 3rem;
		font-weight: 900;
		color: colors.$black;
	}

	a {
		display: inline-block;
		margin-top: 1rem;
		font-weight: 700;
		color: colors.$black;
	}
</style>
