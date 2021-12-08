import type User from '.'

export interface Snapshot {
	id: string
	get(key: string): unknown
}

const userFromSnapshot = (snapshot: Snapshot): User => ({
	id: snapshot.id,
	name: (snapshot.get('name') as string | undefined) ?? null,
	email: (snapshot.get('email') as string | undefined) ?? null,
	cash: (snapshot.get('cash') as number | undefined) ?? 0
})

export default userFromSnapshot
