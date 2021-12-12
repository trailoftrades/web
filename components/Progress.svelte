<script lang="ts">
	import { configure, start, done } from 'nprogress'

	import { browser } from '$app/env'
	import { navigating } from '$app/stores'

	$: if (browser) configure({ showSpinner: false })
	$: if (browser) $navigating ? start() : done()
</script>

<style lang="scss" global>
	@use 'shared/z-index';

	$color: white;

	#nprogress {
		pointer-events: none;

		.bar {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 0.2rem;
			background: $color;
			z-index: z-index.$progress;
		}

		.peg {
			position: absolute;
			right: 0;
			width: 6.25rem;
			height: 100%;
			box-shadow: 0 0 0.63rem $color, 0 0 0.31rem $color;
			transform: rotate(3deg) translateY(-0.25rem);
		}
	}
</style>
