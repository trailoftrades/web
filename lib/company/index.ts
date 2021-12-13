export default interface Company {
	id: string
	owner: string | null
	name: string | null
	color: string | null
	rate: number | null
	cash: number | null

	/** Milliseconds since epoch. */
	created: number | null
}
