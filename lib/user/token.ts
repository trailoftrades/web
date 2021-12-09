import { getFirestore } from 'firebase-admin/firestore'

import app from '../app/admin'
import idFromToken from '../token/id'
import userFromSnapshot from './snapshot'

const firestore = getFirestore(app)

const userFromToken = async (token: string) => {
	const id = await idFromToken(token)

	return id === null
		? null
		: userFromSnapshot(await firestore.doc(`users/${id}`).get())
}

export default userFromToken
