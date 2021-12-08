import type User from '.'

export interface Snapshot {
	id: string
	get(key: string): unknown
}

const userFromSnapshot = (snapshot: Snapshot): User => {
	const get = <Value>(key: string) =>
		(snapshot.get(key) as Value | undefined) ?? null

	return {
		id: snapshot.id,
		name: get('name'),
		email: get('email'),
		cash: get('cash')
	}
}

export default userFromSnapshot
