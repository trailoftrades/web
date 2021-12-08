import type User from '.'

export interface Snapshot {
	id: string
	get(key: string): unknown
}

const get = <Value>(snapshot: Snapshot, key: string) =>
	(snapshot.get(key) as Value | undefined) ?? null

const userFromSnapshot = (snapshot: Snapshot): User => ({
	id: snapshot.id,
	name: get(snapshot, 'name'),
	email: get(snapshot, 'email'),
	cash: get(snapshot, 'cash')
})

export default userFromSnapshot
