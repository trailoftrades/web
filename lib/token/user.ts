import type { FirebaseError } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

import type User from '../user'
import getApp from '../app/admin'

const auth = getAuth(getApp())

/** Gets user data only from auth data. */
const initialUserFromToken = async (token: string): Promise<User | null> => {
	try {
		const user = await auth.verifyIdToken(token)

		return {
			id: user.uid,
			name: (user.name as string | undefined) ?? null,
			email: user.email ?? null,
			cash: null
		}
	} catch (error) {
		switch ((error as FirebaseError)?.code) {
			case 'auth/argument-error':
			case 'auth/id-token-expired':
				return null
			default:
				throw error
		}
	}
}

export default initialUserFromToken
