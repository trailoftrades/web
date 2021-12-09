import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	getAdditionalUserInfo
} from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

import app from '../../app'
import INITIAL_CASH from '../../user/cash/initial'

const auth = getAuth(app)
const firestore = getFirestore(app)

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
