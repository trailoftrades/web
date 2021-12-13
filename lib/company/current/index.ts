import type { Readable, Unsubscriber } from 'svelte/store'
import { derived } from 'svelte/store'

import { browser } from '$app/env'
import { page } from '$app/stores'

import type Company from '..'
import initialCompany from './initial'
import handleError from '../../error/handle'

/**
 * - `Company`: Successfully loaded company.
 * - `null`: Not found.
 * - `undefined`: Not loaded.
 */
const company: Readable<Company | null | undefined> = derived(
	[initialCompany, page],
	([$initial, $page], set) => {
		set($initial)
		if (!browser) return

		const id = $page.params.company
		if (!id) return

		let valid = true
		let unsubscribe: Unsubscriber | null = null

		import('./observe')
			.then(({ default: observe }) => {
				if (!valid) return
				unsubscribe = observe(id, set)
			})
			.catch(handleError)

		return () => {
			valid = false
			unsubscribe?.()
		}
	}
)

export default company
