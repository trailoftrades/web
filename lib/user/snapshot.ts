import type User from '.'
import type Snapshot from '../snapshot'
import exists from '../snapshot/exists'
import get from '../snapshot/get'
import INITIAL_CASH from './cash/initial'

const userFromSnapshot = (snapshot: Snapshot): User | null => {
	if (!exists(snapshot)) return null

	return {
		id: snapshot.id,
		name: get(snapshot, 'name', 'string', 'Anonymous'),
		email: get(snapshot, 'email', 'string', '(error)'),
		cash: get(snapshot, 'cash', 'number', INITIAL_CASH)
	}
}

export default userFromSnapshot
