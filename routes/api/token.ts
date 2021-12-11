import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../../lib/data/locals'
import idFromToken from '../../lib/token/id'
import setToken from '../../lib/token/set'
import UNKNOWN_ERROR_MESSAGE from '../../lib/error/unknown'

export const post: RequestHandler<Locals, unknown, string> = async ({
	headers,
	body: token
}) => {
	try {
		if (headers['content-type'] !== 'application/json')
			return { status: 400, body: 'Invalid content type' }

		if (!(token === null || typeof token === 'string'))
			return { status: 400, body: 'Invalid token' }

		if (token !== null)
			try {
				if ((await idFromToken(token)) === null) throw new Error()
			} catch {
				return { status: 403, body: 'Invalid token' }
			}

		return {
			headers: { 'set-cookie': setToken(token) },
			body: ''
		}
	} catch (error) {
		return {
			status: 500,
			body: error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE
		}
	}
}
