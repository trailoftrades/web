import { getFirestore } from 'firebase-admin/firestore'

import getApp from '../app/admin'
import userFromSnapshot from './snapshot'

const firestore = getFirestore(getApp())

const getUser = async (id: string) =>
	userFromSnapshot(await firestore.doc(`users/${id}`).get())

export default getUser
