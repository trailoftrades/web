import type Company from '.'
import type Snapshot from '../snapshot'
import exists from '../snapshot/exists'
import get from '../snapshot/get'

const companyFromSnapshot = (snapshot: Snapshot): Company | null => {
	if (!exists(snapshot)) return null

	return {
		id: snapshot.id,
		owner: get(snapshot, 'owner', 'string', null),
		name: get(snapshot, 'name', 'string', null),
		color: get(snapshot, 'color', 'string', null),
		rate: get(snapshot, 'rate', 'number', null),
		cash: get(snapshot, 'cash', 'number', null),
		created: get(snapshot, 'created', 'millis', null)
	}
}

export default companyFromSnapshot
