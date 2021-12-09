import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../lib/data/locals'
import idFromToken from '../lib/token/id'
import setToken from '../lib/token/set'

export const post: RequestHandler<Locals, unknown, string> = async ({
	body: token
}) => {
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
}
