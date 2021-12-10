import { derived } from 'svelte/store'

import { browser } from '$app/env'
import { page } from '$app/stores'
import { goto } from '$app/navigation'

import handleError from '../error/handle'

export const COMPANY_FILTER_KEY = 'companies'
export const DEFAULT_COMPANY_FILTER: CompanyFilter = 'top'

export const companyFilters = ['top', 'owned', 'invested'] as const
export type CompanyFilter = typeof companyFilters[number]

const companyFilter = derived(page, $page => {
	const optionalFilter = $page.query.get(COMPANY_FILTER_KEY)
	const filter = optionalFilter ?? DEFAULT_COMPANY_FILTER

	const valid = (companyFilters as readonly string[]).includes(filter)

	if (browser && (optionalFilter === DEFAULT_COMPANY_FILTER || !valid)) {
		const query = new URLSearchParams($page.query)

		query.delete(COMPANY_FILTER_KEY)

		const { path } = $page
		const queryString = query.toString()

		goto(`${path}${queryString && '?'}${queryString}`, {
			replaceState: true,
			noscroll: true,
			keepfocus: true
		}).catch(handleError)
	}

	return valid ? (filter as CompanyFilter) : DEFAULT_COMPANY_FILTER
})

export default companyFilter
