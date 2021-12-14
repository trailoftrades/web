import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../../lib/data/locals'
import getUser from '../../../lib/user/get'
import sanitizeUser from '../../../lib/user/sanitize'
import HttpError from '../../../lib/error/http'
import UNKNOWN_ERROR_MESSAGE from '../../../lib/error/unknown'

export const get: RequestHandler<Locals, unknown, string> = async ({
	params: { user: id }
}) => {
	try {
		const user = await getUser(id)
		if (user) sanitizeUser(user)

		return {
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(user)
		}
	} catch (error) {
		return {
			status: error instanceof HttpError ? error.code : 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
