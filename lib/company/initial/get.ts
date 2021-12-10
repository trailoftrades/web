import { getFirestore } from 'firebase-admin/firestore'

import type User from '../../user'
import type Company from '..'
import type { CompanyFilter } from '../filter'
import getApp from '../../app/admin'
import TOP_COMPANIES_LIMIT from '../top'
import companyFromSnapshot from '../snapshot'

const getInitialCompanies = async (
	user: User | null,
	filter: CompanyFilter
) => {
	const firestore = getFirestore(getApp())

	switch (filter) {
		case 'top': {
			const { docs } = await firestore
				.collection('companies')
				.orderBy('cash', 'desc')
				.limit(TOP_COMPANIES_LIMIT)
				.get()

			return docs.map(companyFromSnapshot) as Company[]
		}
		case 'owned': {
			if (!user) return null

			const { docs } = await firestore
				.collection('companies')
				.where('owner', '==', user.id)
				.orderBy('cash', 'desc')
				.get()

			return docs.map(companyFromSnapshot) as Company[]
		}
		case 'invested': {
			if (!user) return null

			// TODO: Load user's investments
			return [] as Company[]
		}
	}
}

export default getInitialCompanies
