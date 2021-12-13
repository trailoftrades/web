import type User from '.'
import type Snapshot from '../snapshot'
import exists from '../snapshot/exists'
import get from '../snapshot/get'

const userFromSnapshot = (snapshot: Snapshot): User | null => {
	if (!exists(snapshot)) return null

	return {
		id: snapshot.id,
		name: get(snapshot, 'name', 'string', null),
		email: get(snapshot, 'email', 'string', null),
		cash: get(snapshot, 'cash', 'number', null)
	}
}

export default userFromSnapshot
