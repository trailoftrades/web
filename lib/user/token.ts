import { getFirestore } from 'firebase-admin/firestore'

import app from '../app/admin'
import idFromToken from '../token/id'
import userFromSnapshot from './snapshot'
import defaultUser from './default'

const firestore = getFirestore(app)

const userFromToken = async (token: string) => {
	const id = await idFromToken(token)
	if (id === null) return null

	return (
		userFromSnapshot(await firestore.doc(`users/${id}`).get()) ??
		defaultUser(id)
	)
}

export default userFromToken
