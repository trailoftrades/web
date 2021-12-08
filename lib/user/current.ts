import type { Writable } from 'svelte/store'
import type { Unsubscribe } from 'firebase/firestore'
import { readable, derived } from 'svelte/store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore'

import { browser } from '$app/env'
import { session } from '$app/stores'

import type User from '.'
import type Session from '../data/session'
import app from '../app'
import handleError from '../error/handle'

const auth = getAuth(app)
const firestore = getFirestore(app)

/**
 * - `User`: Signed in.
 * - `null`: Signed out.
 * - `undefined`: Not yet loaded, use `$session.user` instead.
 */
const freshCurrentUser = readable<User | null | undefined>(undefined, set => {
	if (!browser) return

	let snapshotUnsubscribe: Unsubscribe | null = null

	const authUnsubscribe = onAuthStateChanged(
		auth,
		user => {
			snapshotUnsubscribe?.()
			snapshotUnsubscribe = null

			if (!user) return set(null)

			snapshotUnsubscribe = onSnapshot(
				doc(firestore, `users/${user.uid}`),
				snapshot =>
					set({
						id: snapshot.id,
						name: (snapshot.get('name') as string | undefined) ?? null,
						email: (snapshot.get('email') as string | undefined) ?? null,
						cash: (snapshot.get('cash') as number | undefined) ?? 0
					}),
				handleError
			)
		},
		handleError
	)

	return () => {
		authUnsubscribe()
		snapshotUnsubscribe?.()
	}
})

const currentUser = derived(
	[freshCurrentUser, session as Writable<Session>],
	([$currentUser, $session]) =>
		$currentUser === undefined ? $session.user : $currentUser
)

export default currentUser
