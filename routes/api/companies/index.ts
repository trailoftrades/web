import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../../lib/data/locals'
import type { CompanyFilter } from '../../../lib/company/filter'
import {
	DEFAULT_COMPANY_FILTER,
	companyFilters
} from '../../../lib/company/filter'
import getCompanies from '../../../lib/company/companies/get'
import HttpError from '../../../lib/error/http'
import UNKNOWN_ERROR_MESSAGE from '../../../lib/error/unknown'

export const get: RequestHandler<Locals, unknown, string> = async ({
	locals: { user },
	query
}) => {
	try {
		const originalFilter = query.get('filter') ?? DEFAULT_COMPANY_FILTER
		const valid = (companyFilters as readonly string[]).includes(originalFilter)

		const filter = valid
			? (originalFilter as CompanyFilter)
			: DEFAULT_COMPANY_FILTER

		return {
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(await getCompanies(user, filter))
		}
	} catch (error) {
		return {
			status: error instanceof HttpError ? error.code : 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
