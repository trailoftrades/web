import { getFirestore } from 'firebase-admin/firestore'

import getApp from '../app/admin'
import idFromToken from '../token/id'
import userFromSnapshot from './snapshot'
import defaultUser from './default'

const userFromToken = async (token: string) => {
	const id = await idFromToken(token)
	if (id === null) return null

	const firestore = getFirestore(getApp())

	return (
		userFromSnapshot(await firestore.doc(`users/${id}`).get()) ??
		defaultUser(id)
	)
}

export default userFromToken
