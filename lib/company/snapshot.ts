import type Company from '.'
import type Snapshot from '../snapshot'
import exists from '../snapshot/exists'
import get from '../snapshot/get'

const companyFromSnapshot = (snapshot: Snapshot): Company | null => {
	if (!exists(snapshot)) return null

	return {
		id: snapshot.id,
		owner: get(snapshot, 'owner', 'string', '_'),
		name: get(snapshot, 'name', 'string', 'Unnamed Company'),
		color: get(snapshot, 'color', 'string', 'red'),
		rate: get(snapshot, 'rate', 'number', 0),
		cash: get(snapshot, 'cash', 'number', 0)
	}
}

export default companyFromSnapshot
