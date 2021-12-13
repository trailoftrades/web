<script lang="ts">
	import Times from 'svelte-icons/fa/FaTimes.svelte'

	import company from '../../lib/company/current'
</script>

<nav>
	<h1>{$company?.name ?? 'Company not found'}</h1>
	<a href="/">
		<Times />
	</a>
</nav>

<style lang="scss">
	@use 'shared/colors';

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
