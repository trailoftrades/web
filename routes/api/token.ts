import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../lib/data/locals'
import initialUserFromToken from '../../lib/token/user'
import setToken from '../../lib/token/set'
import HttpError from '../../lib/error/http'
import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'

export const post: RequestHandler<Locals, unknown, string> = async ({
	headers,
	body: token
}) => {
	try {
		if (headers['content-type'] !== 'application/json')
			throw new HttpError(400, 'Invalid content type')

		if (!(token === null || typeof token === 'string'))
			throw new HttpError(400, 'Invalid token')

		if (token !== null)
			try {
				if (!(await initialUserFromToken(token))) throw new Error()
			} catch {
				throw new HttpError(403, 'Invalid token')
			}

		return {
			headers: { 'set-cookie': setToken(token) },
			body: ''
		}
	} catch (error) {
		return {
			status: error instanceof HttpError ? error.code : 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
