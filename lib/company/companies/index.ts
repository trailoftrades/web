import type { Readable, Unsubscriber } from 'svelte/store'
import { derived } from 'svelte/store'

import { browser } from '$app/env'

import type Company from '..'
import initialCompanies from '../initial'
import currentUser from '../../user/current'
import companyFilter from '../filter'
import handleError from '../../error/handle'

const companies: Readable<Company[] | null> = derived(
	[initialCompanies, currentUser, companyFilter],
	([$initial, $user, $filter], set) => {
		if ($initial !== undefined) set($initial)
		if (!browser) return

		let valid = true
		let unsubscribe: Unsubscriber | null = null

		import('./observe')
			.then(({ default: observe }) => {
				if (!valid) return
				unsubscribe = observe($user, $filter, set)
			})
			.catch(handleError)

		return () => {
			valid = false
			unsubscribe?.()
		}
	}
)

export default companies
