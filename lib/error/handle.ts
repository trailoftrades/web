const handleError = (error: unknown) => {
	console.log(error)
	alert(error instanceof Error ? error.message : 'An unknown error occurred')
}

export default handleError
