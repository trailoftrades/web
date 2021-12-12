import type { Unsubscriber } from 'svelte/store'
import { readable } from 'svelte/store'

import { browser } from '$app/env'

import type Company from '..'
import handleError from '../../error/handle'

const createCompanyStore = (id: string, initial: Company | null) =>
	readable(initial, set => {
		if (!browser) return

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
	})

export default createCompanyStore
