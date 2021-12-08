import type { RequestHandler } from '@sveltejs/kit'

import type Locals from '../lib/data/locals'
import idFromToken from '../lib/token/id'
import setToken from '../lib/token/set'

export const post: RequestHandler<Locals, unknown, string> = async ({
	body: token
}) => {
	if (typeof token !== 'string') return { status: 400, body: 'Invalid token' }

	try {
		await idFromToken(token)
	} catch {
		return { status: 403, body: 'Unknown token' }
	}

	return {
		headers: { 'set-cookie': setToken(token) }
	}
}
