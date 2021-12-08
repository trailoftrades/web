import { getFirestore } from 'firebase-admin/firestore'

import type User from '.'
import app from '../app/admin'
import idFromToken from '../token/id'

const firestore = getFirestore(app)

const userFromToken = async (token: string): Promise<User> => {
	const id = await idFromToken(token)
	const snapshot = await firestore.doc(`users/${id}`).get()

	return {
		id: snapshot.id,
		name: (snapshot.get('name') as string | undefined) ?? null,
		email: (snapshot.get('email') as string | undefined) ?? null,
		cash: (snapshot.get('cash') as number | undefined) ?? 0
	}
}

export default userFromToken
