import type { Readable, Writable, Unsubscriber } from 'svelte/store'
import { derived } from 'svelte/store'

import { browser } from '$app/env'
import { session } from '$app/stores'

import type Session from '../../data/session'
import type User from '..'
import handleError from '../../error/handle'

const currentUser: Readable<User | null> = derived(
	session as Writable<Session>,
	($session, set) => {
		set($session.user)
		if (!browser) return

		let unsubscribe: Unsubscriber | null = null

		import('./observe')
			.then(({ default: observe }) => {
				unsubscribe = observe(set)
			})
			.catch(handleError)

		return () => {
			unsubscribe?.()
		}
	}
)

export default currentUser
