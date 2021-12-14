import { getAuth, signOut as _signOut } from 'firebase/auth'

import app from '../../app'

const auth = getAuth(app)

const signOut = () => _signOut(auth)

export default signOut
