<script lang="ts">
	import { browser } from '$app/env'
	import { page } from '$app/stores'

	import handleError from '../lib/error/handle'

	$: if (browser)
		import('../lib/analytics/page')
			.then(({ default: setPage }) => setPage($page))
			.catch(handleError)
</script>
