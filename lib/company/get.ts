import { getFirestore } from 'firebase-admin/firestore'

import getApp from '../app/admin'
import companyFromSnapshot from './snapshot'

const firestore = getFirestore(getApp())

const getCompany = async (id: string) =>
	companyFromSnapshot(await firestore.doc(`companies/${id}`).get())

export default getCompany
