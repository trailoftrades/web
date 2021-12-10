import { getAuth, signOut as _signOut } from 'firebase/auth'

import getApp from '../../app'

const signOut = () => _signOut(getAuth(getApp()))

export default signOut
