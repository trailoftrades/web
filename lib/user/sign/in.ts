import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import app from '../../app'

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

const signIn = async () => {
	await signInWithPopup(auth, provider)
}

export default signIn
