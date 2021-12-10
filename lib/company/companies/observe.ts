import type { Unsubscriber } from 'svelte/store'
import {
	getFirestore,
	onSnapshot,
	query,
	collection,
	where,
	orderBy,
	limit
} from 'firebase/firestore'

import type User from '../../user'
import type Company from '..'
import type { CompanyFilter } from '../filter'
import getApp from '../../app'
import TOP_COMPANIES_LIMIT from '../top'
import companyFromSnapshot from '../snapshot'
import handleError from '../../error/handle'

const firestore = getFirestore(getApp())

const observeCompanies = (
	user: User | null,
	filter: CompanyFilter,
	set: (value: Company[] | null) => void
): Unsubscriber | null => {
	switch (filter) {
		case 'top':
			return onSnapshot(
				query(
					collection(firestore, 'companies'),
					orderBy('cash', 'desc'),
					limit(TOP_COMPANIES_LIMIT)
				),
				({ docs }) => set(docs.map(companyFromSnapshot) as Company[]),
				handleError
			)
		case 'owned':
			if (!user) return set(null), null

			return onSnapshot(
				query(
					collection(firestore, 'companies'),
					where('owner', '==', user.id),
					orderBy('cash', 'desc')
				),
				({ docs }) => set(docs.map(companyFromSnapshot) as Company[]),
				handleError
			)
		case 'invested':
			if (!user) return set(null), null

			// TODO: Load user's investments
			set([])

			return null
	}
}

export default observeCompanies
