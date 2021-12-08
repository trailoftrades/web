import { getAuth } from 'firebase-admin/auth'

import app from '../app/admin'

const auth = getAuth(app)

const idFromToken = async (token: string) =>
	(await auth.verifyIdToken(token)).uid

export default idFromToken
