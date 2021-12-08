import type { GetSession } from '@sveltejs/kit'

import type Locals from '../lib/data/locals'
import type Session from '../lib/data/session'
import userFromToken from '../lib/user/token'

const getSession: GetSession<Locals, unknown, Session> = async ({
	locals: { token }
}) => ({
	user: token === null ? null : await userFromToken(token)
})

export default getSession
