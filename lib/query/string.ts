const queryString = (query: URLSearchParams) => {
	const string = query.toString()
	return `${string && '?'}${string}`
}

export default queryString
