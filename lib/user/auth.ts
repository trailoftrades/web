import type { User as FirebaseUser } from 'firebase/auth'

import type User from '.'

const userFromAuth = (user: FirebaseUser): User => {
	const { creationTime } = user.metadata

	return {
		id: user.uid,
		name: user.displayName,
		email: user.email,
		cash: null,
		created: creationTime ? new Date(creationTime).getMilliseconds() : null
	}
}

export default userFromAuth
