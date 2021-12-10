import type { GetSession } from '@sveltejs/kit'

import type Locals from '../lib/data/locals'
import type Session from '../lib/data/session'

const getSession: GetSession<Locals, unknown, Session> = ({ locals }) => ({
	user: locals.user
})

export default getSession
