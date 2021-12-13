export default interface User {
	id: string
	name: string | null
	email: string | null
	cash: number | null

	/** Milliseconds since epoch. */
	created: number | null
}
