import type User from '../user'

export default interface Session {
	user: User | null
}
