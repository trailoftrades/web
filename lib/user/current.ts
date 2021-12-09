import type { Readable, Writable } from 'svelte/store'
import type { Unsubscribe } from 'firebase/firestore'
import { derived } from 'svelte/store'
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

const currentUser: Readable<User | null> = derived(
	session as Writable<Session>,
	($session, set) => {
		set($session.user)

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
	}
)

export default currentUser
