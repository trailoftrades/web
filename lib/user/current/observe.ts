import type { Unsubscriber } from 'svelte/store'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, onSnapshot } from 'firebase/firestore'

import type User from '..'
import app from '../../app'
import sendToken from '../../token/send'
import userFromSnapshot from '../snapshot'
import userFromAuth from '../auth'
import handleError from '../../error/handle'

const auth = getAuth(app)
const firestore = getFirestore(app)

const observeCurrentUser = (
	set: (value: User | null) => void
): Unsubscriber => {
	let valid = true
	let snapshotUnsubscribe: Unsubscriber | null = null

	const authUnsubscribe: Unsubscriber = onAuthStateChanged(
		auth,
		user => {
			if (!valid) return

			snapshotUnsubscribe?.()
			snapshotUnsubscribe = null

			sendToken(user).catch(handleError)

			if (!user) return set(null)

			snapshotUnsubscribe = onSnapshot(
				doc(firestore, `users/${user.uid}`),
				snapshot => set(userFromSnapshot(snapshot) ?? userFromAuth(user)),
				handleError
			)
		},
		handleError
	)

	return () => {
		valid = false

		authUnsubscribe()
		snapshotUnsubscribe?.()
	}
}

export default observeCurrentUser
