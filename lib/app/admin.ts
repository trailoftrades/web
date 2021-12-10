import type { App, ServiceAccount } from 'firebase-admin/app'
import { initializeApp, cert } from 'firebase-admin/app'

let app: App | null = null

const getApp = () =>
	(app ??= initializeApp({
		credential: cert(
			JSON.parse(
				Buffer.from(
					import.meta.env.VITE_FIREBASE_ADMIN_KEY,
					'base64'
				).toString()
			) as ServiceAccount
		),
		storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
	}))

export default getApp
