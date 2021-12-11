const queryWith = (
	previous: URLSearchParams | string,
	name: string,
	value: string | null
) => {
	const query = new URLSearchParams(previous)
	value === null ? query.delete(name) : query.set(name, value)

	return query
}

export default queryWith
