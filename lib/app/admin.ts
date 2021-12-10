import type { FirebaseError, ServiceAccount } from 'firebase-admin/app'
import {
	getApp as getDefaultApp,
	initializeApp,
	cert
} from 'firebase-admin/app'

const getApp = () => {
	try {
		return getDefaultApp()
	} catch (error) {
		if ((error as FirebaseError)?.code !== 'app/no-app') throw error

		const serviceAccount = JSON.parse(
			Buffer.from(import.meta.env.VITE_FIREBASE_ADMIN_KEY, 'base64').toString()
		) as ServiceAccount

		return initializeApp({
			credential: cert(serviceAccount),
			storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
		})
	}
}

export default getApp
