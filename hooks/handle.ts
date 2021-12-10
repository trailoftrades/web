import type { Handle } from '@sveltejs/kit'

import type Locals from '../lib/data/locals'
import getToken from '../lib/token/get'
import userFromToken from '../lib/user/token'

const handle: Handle<Locals, unknown> = async ({ request, resolve }) => {
	const token = getToken(request.headers.cookie)
	request.locals.user = token === null ? null : await userFromToken(token)

	return resolve(request)
}

export default handle
