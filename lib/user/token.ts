import { getFirestore } from 'firebase-admin/firestore'

import type User from '.'
import app from '../app/admin'
import idFromToken from '../token/id'
import userFromSnapshot from './snapshot'

const firestore = getFirestore(app)

const userFromToken = async (token: string): Promise<User> => {
	const id = await idFromToken(token)
	return userFromSnapshot(await firestore.doc(`users/${id}`).get())
}

export default userFromToken
