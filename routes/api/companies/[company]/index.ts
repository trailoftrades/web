import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../../../lib/data/locals'
import getCompany from '../../../../lib/company/get'
import getCompanyWithOwner from '../../../../lib/company/owner/with/get'
import HttpError from '../../../../lib/error/http'
import UNKNOWN_ERROR_MESSAGE from '../../../../lib/error/unknown'

export const get: RequestHandler<Locals, unknown, string> = async ({
	params: { company: id },
	query
}) => {
	try {
		const company = await (query.has('owner')
			? getCompanyWithOwner(id, true)
			: getCompany(id))

		return {
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(company)
		}
	} catch (error) {
		return {
			status: error instanceof HttpError ? error.code : 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
