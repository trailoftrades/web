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
		let unsubscribed = false

		import('./observe')
			.then(({ default: observe }) => {
				if (unsubscribed) return
				unsubscribe = observe(set)
			})
			.catch(handleError)

		return () => {
			unsubscribe?.()
			unsubscribed = true
		}
	}
)

export default currentUser
