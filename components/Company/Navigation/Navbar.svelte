<script lang="ts">
	import Times from 'svelte-icons/fa/FaTimes.svelte'

	import company from '../../../lib/company/current'
	import Pages from './Pages.svelte'
	import Info from '../Info.svelte'
</script>

<div class="root">
	<nav>
		<h1>{$company?.name ?? 'Company not found'}</h1>
		<Pages />
		<a href="/">
			<Times />
		</a>
	</nav>
	<Info />
</div>

<style lang="scss">
	@use 'shared/colors';
	@use 'shared/z-index';

	.root {
		position: relative;
		max-width: 112.5rem;
		width: 100%;
		margin: 0 auto 2rem;
		padding: 2rem 2.5rem;
		z-index: z-index.$navigation;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h1 {
		font-size: 3rem;
		font-weight: 900;
		color: colors.$black;
	}

	a {
		$dimension: 3rem;

		flex-shrink: 0;
		position: relative;
		width: $dimension;
		height: $dimension;
		color: colors.$dark-gray;
		background: rgba(white, 0.5);
		border-radius: 50%;
		transition: opacity 0.3s;

		&:hover {
			opacity: 0.5;
		}

		> :global(svg) {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 1.2rem;
			transform: translate(-50%, -50%);
		}
	}
</style>
