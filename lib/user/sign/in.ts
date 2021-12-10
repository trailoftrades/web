import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	getAdditionalUserInfo
} from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

import getApp from '../../app'
import INITIAL_CASH from '../cash/initial'

const auth = getAuth(getApp())
const firestore = getFirestore(getApp())

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

const signIn = async () => {
	const result = await signInWithPopup(auth, provider)

	const { user } = result
	if (!user.email) throw new Error('Unable to get email')

	const info = getAdditionalUserInfo(result)
	if (!info) throw new Error('Unable to get additional user info')

	if (info.isNewUser)
		await setDoc(doc(firestore, `users/${user.uid}`), {
			name: user.displayName,
			email: user.email,
			cash: INITIAL_CASH
		})
}

export default signIn
