import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import getApp from '../../app'

const auth = getAuth(getApp())

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

const signIn = async () => {
	await signInWithPopup(auth, provider)
}

export default signIn
