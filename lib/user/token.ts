import { getFirestore } from 'firebase-admin/firestore'

import type User from '.'
import app from '../app/admin'
import idFromToken from '../token/id'

const firestore = getFirestore(app)

const userFromToken = async (token: string): Promise<User> => {
	const id = await idFromToken(token)

	const data = (await firestore.doc(`users/${id}`).get()).data()
	if (!data) throw new Error('Unable to get user data')

	return { id, ...(data as Omit<User, 'id'>) }
}

export default userFromToken
