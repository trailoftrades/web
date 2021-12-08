import type User from '.'
import idFromToken from '../token/id'

const userFromToken = async (token: string): Promise<User> => ({
	id: await idFromToken(token),
	name: 'unknown',
	cash: 0
})

export default userFromToken
