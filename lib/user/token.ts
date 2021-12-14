import { getFirestore } from 'firebase-admin/firestore'

import app from '../app/admin'
import initialUserFromToken from '../token/user'
import userFromSnapshot from './snapshot'

const firestore = getFirestore(app)

const userFromToken = async (token: string) => {
	const initial = await initialUserFromToken(token)
	if (!initial) return null

	return (
		userFromSnapshot(await firestore.doc(`users/${initial.id}`).get()) ??
		initial
	)
}

export default userFromToken
