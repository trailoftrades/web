import type { ServiceAccount } from 'firebase-admin/app'
import { initializeApp, cert } from 'firebase-admin/app'

const account = JSON.parse(
	Buffer.from(import.meta.env.VITE_FIREBASE_ADMIN_KEY, 'base64').toString()
) as ServiceAccount

const app = initializeApp({
	credential: cert(account),
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
})

export default app
