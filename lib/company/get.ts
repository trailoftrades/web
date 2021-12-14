import { getFirestore } from 'firebase-admin/firestore'

import app from '../app/admin'
import companyFromSnapshot from './snapshot'

const firestore = getFirestore(app)

const getCompany = async (id: string) =>
	companyFromSnapshot(await firestore.doc(`companies/${id}`).get())

export default getCompany
