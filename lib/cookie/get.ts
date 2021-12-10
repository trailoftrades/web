import { unsign } from 'cookie-signature'

import COOKIE_SECRET from './secret'
import parseCookies from './parse'

const getCookie = (header: string | undefined, name: string) => {
	const value = parseCookies(header)[name]
	return (value && unsign(value, COOKIE_SECRET)) || null
}

export default getCookie
