<script lang="ts">
	import Analytics from '../components/Analytics.svelte'
	import Progress from '../components/Progress.svelte'
	import Companies from '../components/Companies/Scene.svelte'
</script>

<Analytics />
<Progress />

<Companies />
<slot />

<style lang="scss" global>
	@use 'balloon-css/balloon' as *;

	:root {
		--balloon-font-size: 1rem;
		--balloon-font-weight: 700;
		--balloon-border-radius: 0.25rem;
	}

	*,
	::before,
	::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: inherit;
		font-family: inherit;
		font-size: inherit;
		color: inherit;
		border: none;
		outline: none;
	}

	html,
	body {
		height: 100%;
	}

	body {
		overflow: hidden;
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
			Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	button,
	[role='button'] {
		cursor: pointer;
	}

	button:disabled {
		cursor: default;
	}

	svg {
		display: block;
	}

	[aria-label][data-balloon-pos] {
		cursor: help;

		&::after {
			font-weight: var(--balloon-font-weight);
		}
	}
</style>
