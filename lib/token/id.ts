import type { FirebaseError } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'

import getApp from '../app/admin'

const idFromToken = async (token: string) => {
	try {
		const auth = getAuth(getApp())
		return (await auth.verifyIdToken(token)).uid
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

export default idFromToken
