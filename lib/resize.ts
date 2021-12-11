import { readable } from 'svelte/store'

import { browser } from '$app/env'

const resize = readable({} as never, set => {
	if (!browser) return

	const update = () => set({} as never)

	window.addEventListener('resize', update)
	return () => window.removeEventListener('resize', update)
})

export default resize
