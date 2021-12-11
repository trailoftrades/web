import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../../lib/data/locals'
import getCompany from '../../../lib/company/get'
import UNKNOWN_ERROR_MESSAGE from '../../../lib/error/unknown'

export const get: RequestHandler<Locals, unknown, string> = async ({
	params: { company: id }
}) => {
	try {
		if (typeof id !== 'string') return { status: 400, body: 'Invalid ID' }

		const company = await getCompany(id)
		if (!company) return { status: 404, body: 'Company not found' }

		return {
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(company)
		}
	} catch (error) {
		return {
			status: 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
