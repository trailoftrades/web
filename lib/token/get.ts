import parseCookies from '../cookie/parse'

const getToken = (header: string | undefined) =>
	parseCookies(header).token ?? null

export default getToken
