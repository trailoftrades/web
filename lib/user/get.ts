import { getFirestore } from 'firebase-admin/firestore'

import app from '../app/admin'
import userFromSnapshot from './snapshot'
import sanitizedUser from './sanitized'

const firestore = getFirestore(app)

const getUser = async (id: string, sanitized = false) => {
	const user = userFromSnapshot(await firestore.doc(`users/${id}`).get())
	if (!user) return null

	return sanitized ? sanitizedUser(user) : user
}

export default getUser
