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
import sendToken from '../token/send'
import userFromSnapshot from './snapshot'
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

			sendToken(user).catch(handleError)
			if (!user) return set(null)

			snapshotUnsubscribe = onSnapshot(
				doc(firestore, `users/${user.uid}`),
				snapshot => set(userFromSnapshot(snapshot)),
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
