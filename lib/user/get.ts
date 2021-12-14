import { getFirestore } from 'firebase-admin/firestore'

import app from '../app/admin'
import userFromSnapshot from './snapshot'

const firestore = getFirestore(app)

const getUser = async (id: string) =>
	userFromSnapshot(await firestore.doc(`users/${id}`).get())

export default getUser
