<script lang="ts">
	import { configure, start, done } from 'nprogress'

	import { browser } from '$app/env'
	import { navigating } from '$app/stores'

	import '../shared/progress.scss'

	$: if (browser) configure({ showSpinner: false })
	$: if (browser) $navigating ? start() : done()
</script>
