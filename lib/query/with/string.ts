import queryWith from '.'
import queryString from '../string'

const queryStringWith = (...options: Parameters<typeof queryWith>) =>
	queryString(queryWith(...options))

export default queryStringWith
