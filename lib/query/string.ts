const queryString = (query: URLSearchParams, prefix: string | null = '?') => {
	const string = query.toString()
	return `${string && (prefix ?? '')}${string}`
}

export default queryString
