import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../../../lib/data/locals'
import getEvaluations from '../../../../lib/company/evaluation/get'
import HttpError from '../../../../lib/error/http'
import UNKNOWN_ERROR_MESSAGE from '../../../../lib/error/unknown'

export const get: RequestHandler<Locals, unknown, string> = async ({
	params: { company: id }
}) => {
	try {
		return {
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(await getEvaluations(id))
		}
	} catch (error) {
		return {
			status: error instanceof HttpError ? error.code : 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
