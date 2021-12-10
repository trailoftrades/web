<script lang="ts">
	import { getAnalytics, logEvent } from 'firebase/analytics'

	import { browser } from '$app/env'
	import { page } from '$app/stores'

	import app from '../lib/app'

	$: if (browser) {
		const { path, query } = $page
		const queryString = query.toString()

		logEvent(getAnalytics(app), 'page_view', {
			page_path: `${path}${queryString && '?'}${queryString}`
		})
	}
</script>

<slot />

<style lang="scss" global>
	*,
	::before,
	::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		line-height: inherit;
		font-family: inherit;
		font-size: inherit;
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
</style>
