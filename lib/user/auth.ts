import type { User as FirebaseUser } from 'firebase/auth'

import type User from '.'

const userFromAuth = (user: FirebaseUser): User => ({
	id: user.uid,
	name: user.displayName,
	email: user.email,
	cash: null
})

export default userFromAuth
