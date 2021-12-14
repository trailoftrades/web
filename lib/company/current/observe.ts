import type { Unsubscriber } from 'svelte/store'
import { getFirestore, onSnapshot, doc } from 'firebase/firestore'

import type Company from '..'
import app from '../../app'
import companyFromSnapshot from '../snapshot'
import handleError from '../../error/handle'

const firestore = getFirestore(app)

const observeCompany = (
	id: string,
	set: (value: Company | null) => void
): Unsubscriber =>
	onSnapshot(
		doc(firestore, `companies/${id}`),
		snapshot => set(companyFromSnapshot(snapshot)),
		handleError
	)

export default observeCompany
