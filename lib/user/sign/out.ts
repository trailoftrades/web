import { getAuth, signOut as _signOut } from 'firebase/auth'

import getApp from '../../app'

const auth = getAuth(getApp())

const signOut = () => _signOut(auth)

export default signOut
