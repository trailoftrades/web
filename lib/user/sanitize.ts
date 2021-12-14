import type User from '.'

/** Remove sensitive info. */
const sanitizeUser = (user: User) => {
	user.email = null
}

export default sanitizeUser
