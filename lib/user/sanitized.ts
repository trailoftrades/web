import type User from '.'

/** Without sensitive info. */
const sanitizedUser = (user: User): User => ({
	...user,
	email: null
})

export default sanitizedUser
