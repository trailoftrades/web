import UNKNOWN_ERROR_MESSAGE from './unknown'

const handleError = (error: unknown) => {
	console.log(error)
	alert(error instanceof Error ? error.message : UNKNOWN_ERROR_MESSAGE)
}

export default handleError
