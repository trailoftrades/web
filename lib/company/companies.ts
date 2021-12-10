import type { Readable } from 'svelte/store'
import { derived } from 'svelte/store'
import {
	getFirestore,
	onSnapshot,
	query,
	collection,
	where,
	orderBy,
	limit
} from 'firebase/firestore'

import { browser } from '$app/env'

import type Company from '.'
import app from '../app'
import initialCompanies from './initial'
import currentUser from '../user/current'
import companyFilter from './filter'
import companyFromSnapshot from './snapshot'
import TOP_COMPANIES_LIMIT from './top'
import handleError from '../error/handle'

const firestore = getFirestore(app)

const companies: Readable<Company[] | null> = derived(
	[initialCompanies, currentUser, companyFilter],
	([$initial, $user, $filter], set) => {
		if ($initial !== undefined) set($initial)
		if (!browser) return

		switch ($filter) {
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
				if (!$user) return set(null)

				return onSnapshot(
					query(
						collection(firestore, 'companies'),
						where('owner', '==', $user.id),
						orderBy('cash', 'desc')
					),
					({ docs }) => set(docs.map(companyFromSnapshot) as Company[]),
					handleError
				)
			case 'invested':
				if (!$user) return set(null)

				// TODO: Load user's investments
				set([])

				return
		}
	}
)

export default companies
