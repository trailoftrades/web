import type { Handle } from '@sveltejs/kit'

import type Locals from '../lib/data/locals'
import getToken from '../lib/token/get'

const handle: Handle<Locals, unknown> = ({ request, resolve }) => {
	request.locals.token = getToken(request.headers.cookie)
	return resolve(request)
}

export default handle
