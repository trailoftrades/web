import type User from '.'

const defaultUser = (id: string): User => ({
	id,
	name: null,
	email: null,
	cash: null
})

export default defaultUser
